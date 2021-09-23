import { connectToDatabase } from "../../helpers/mongodb";

import BookCard from "../../components/ui/BookCard/BookCard";

export default function Books(props) {
  return (
    <div className='container'>
      {props.books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
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
