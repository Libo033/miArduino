import clientPromise from "@/libs/MongoConnect";
import { Db, MongoClient, ObjectId } from "mongodb";

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
