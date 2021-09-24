import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./BookCard.module.css";

export default function BookCard(props) {
  const router = useRouter();
  const { title, description, slug } = props.book;

  return (
    <Link href={`/books/${slug}`}>
      <a className={classes.BookCard}>
        <h3>{title}</h3>
        <img src={"/Sapiens.jpg"} />
        <p>{description.substring(0, 100) + " ..."}</p>
      </a>
    </Link>
  );
}
