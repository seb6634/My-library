import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
