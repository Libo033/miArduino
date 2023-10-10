import clientPromise from "@/libs/MongoConnect";
import { IDataReceivePOST } from "@/libs/interfaces";
import { Db, Document, MongoClient, WithId } from "mongodb";

export async function GET(req: Request) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("arduino");

    const proyectos: WithId<Document>[] = await db
      .collection("proyectos")
      .find()
      .toArray();

    return Response.json(proyectos, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(error.message, { status: 500 });
    }
  }
}

export async function POST(req: Request) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("arduino");
    const body: IDataReceivePOST = await req.json();

    if (!body.name || !body.image || !body.url || !body.info) {
      throw new Error("No se recibieron los datos correctamente");
    }

    const nuevo_proyecto = {
      name: body.name,
      image: body.image,
      url: body.url,
      info: body.info,
    };

    const nuevo_proyecto_creado = await db
      .collection("proyectos")
      .insertOne(nuevo_proyecto);

    return Response.json(
      { creado: nuevo_proyecto_creado.acknowledged },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(error.message, { status: 400 });
    }
  }
}
