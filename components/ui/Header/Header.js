import classes from "./Header.module.css";
import Link from "next/link";

export default function Header({ firstName = "Sébastien" }) {
  return (
    <header className={classes.Header}>
      <nav>
        <ul>
          <li className='firt_name'>{firstName}</li>
          <li>
            <Link href='/'>Acceuil</Link>
          </li>
          <li>
            <Link href='/books'>Livres</Link>
          </li>
          <li>
            <Link href='/addBook'>Ajouter</Link>
          </li>
          <li>
            <Link href='/about'>Apropos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
