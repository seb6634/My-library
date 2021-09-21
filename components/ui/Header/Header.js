import classes from "./Header.module.css";

export default function Header({ firstName = "Sébastien" }) {
  return (
    <header className={classes.Header}>
      <nav>
        <ul>
          <li className='name'>
            <a href='#'>{firstName}</a>
          </li>
          <li>
            <a href='#'>Acceuil</a>
          </li>
          <li>
            <a href='#'>Livres</a>
          </li>
          <li>
            <a href='#'>A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
