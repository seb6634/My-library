import classes from "./BookCard.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function BookCard(props) {
  const router = useRouter();
  const { title, description, slug } = props.book;

  return (
    <Link href={`/books/${slug}`}>
      <a className={classes.BookCard}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </Link>
  );
}
