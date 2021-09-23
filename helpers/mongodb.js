import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qfasi.mongodb.net/library?retryWrites=true&w=majority`
  );

  return client;
}
