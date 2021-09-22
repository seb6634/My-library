// Librairies
import classes from "./BookCard.module.css";
import { useRouter } from "next/router";

export default function BookCard() {
  // Variable
  const router = useRouter();

  // Méthode
  const cardClickedHandler = () => {
    router.push({
      pathname: "/books/[slug]",
      query: {
        slug: "book1",
      },
    });
  };

  return (
    <div className={classes.BookCard} onClick={cardClickedHandler}>
      <h3>Livre 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
        quis exercitationem culpa nesciunt nihil aut nostrum explicabo
        reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
        Voluptatum ducimus voluptates voluptas?
      </p>
    </div>
  );
}
