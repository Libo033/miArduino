import clientPromise from "@/libs/MongoConnect";
import { Db, MongoClient, ObjectId } from "mongodb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db("arduino");
  const id: string = params.id;

  const proyecto = await db
    .collection("proyectos")
    .findOne({ _id: new ObjectId(id) });

  return Response.json(proyecto, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db("arduino");
    const id: string = params.id;

    const borrar_proyecto = await db
      .collection("proyectos")
      .deleteOne({ _id: new ObjectId(id) });

    return Response.json(
      { deleted: borrar_proyecto.acknowledged },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(error.message, { status: 500 });
    }
  }
}
