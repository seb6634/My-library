import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://user61489636:AnMdH9i8SpDOAUi0@cluster0.qfasi.mongodb.net/library?retryWrites=true&w=majority"
  );

  return client;
}
