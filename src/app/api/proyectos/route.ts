import clientPromise from "@/libs/MongoConnect";
import { Db, Document, MongoClient, WithId } from "mongodb";

export async function GET(req: Request) {
  const client: MongoClient = await clientPromise;
  const db: Db = client.db("arduino");

  const proyectos: WithId<Document>[] = await db
    .collection("proyectos")
    .find()
    .toArray();

  return Response.json(proyectos, { status: 200 });
}
