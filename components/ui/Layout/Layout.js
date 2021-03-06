import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout(props) {
  return (
    <div className='layout'>
      <Header />
      <div className='container'>{props.children}</div>
      <Footer />
    </div>
  );
}
