import BookCard from "../../components/ui/BookCard/BookCard";

export default function books({ myBooks = "Mes Livres" }) {
  return (
    <div className='container'>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
