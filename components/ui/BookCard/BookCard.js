import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classes from "./BookCard.module.css";

export default function BookCard(props) {
  const router = useRouter();
  const { title, description, slug } = props.book;
  return (
    <>
      <Link href={`/books/${slug}`}>
        <a className={classes.BookCard}>
          <h3>{title}</h3>
          <Image
            src={"/Sapiens.jpg"}
            alt='book'
            width='150rem'
            height='170rem'
          />
          <p>{description.substring(0, 100) + " ..."}</p>
        </a>
      </Link>
    </>
  );
}
