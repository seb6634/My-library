import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import classes from "./BookCard.module.css";

export default function BookCard(props) {
  const router = useRouter();
  const { title, tag, description, slug, year, img } = props.book;
  return (
    <>
      <Link href={`/books/${slug}`}>
        <a className={classes.BookCard}>
          <h3>{title}</h3>
          <small>{tag}</small>
          {img ? (
            <img src={img} alt='book' width='190rem' height='170rem' />
          ) : (
            <img
              src={"/default.png"}
              alt='default_img'
              width='130rem'
              height='170rem'
              maxWidth='150rem'
            />
          )}

          <p>Sortie le : {year}</p>
          <p>{description.substring(0, 100) + " ..."}</p>
        </a>
      </Link>
    </>
  );
}
