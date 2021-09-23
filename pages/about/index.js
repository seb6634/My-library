export default function About({ about = "A propos" }) {
  return (
    <div className='container'>
      <h1 className='about'>{about}</h1>
    </div>
  );
}
