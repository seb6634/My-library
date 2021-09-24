import { connectToDatabase } from "../../helpers/mongodb";
import BookCard from "../../components/ui/BookCard/BookCard";
import Head from "next/head";

export default function Books(props) {
  let h1 = "Ma collection de livres";
  return (
    <>
      <Head>
        <title>{h1}</title>
      </Head>
      <h1 className='title'>{h1}</h1>
      {props.books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  let books;

  try {
    const client = await connectToDatabase();
    const db = client.db();
    books = await db.collection("books").find().toArray();
    books = JSON.parse(JSON.stringify(books));
  } catch (error) {
    books = [];
  }

  return {
    props: {
      books: books,
    },
    revalidate: 3600,
  };
}
