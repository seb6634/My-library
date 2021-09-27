import { connectToDatabase } from "../../helpers/mongodb";

export default async function handler(req, res) {
  const { title, tag, year, description, author, img } = req.body;

  if (!title || !tag || !year || !description || !author) {
    res.status(422).json({
      message: "Champ du formulaire manquant.",
    });
    return;
  }

  const newBook = {
    title,
    tag,
    year,
    description,
    author,
    img,
  };

  let clientMongoDB;
  try {
    clientMongoDB = await connectToDatabase();
  } catch (error) {
    res.status(500).json({
      message: "Impossible d'effectuer la requête.",
    });
    return;
  }

  const db = clientMongoDB.db();

  try {
    await db.collection("books").insertOne(newBook);
  } catch (error) {
    clientMongoDB.close();
    res.status(500).json({
      message: "Un problème est survenu.",
    });
  }

  clientMongoDB.close();
  res.status(201).json({
    message: "Projet ajouté avec succès.",
    projet: newBook,
  });
}
