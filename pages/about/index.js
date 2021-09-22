export default function about({ about = "A propos" }) {
  return (
    <div className='container'>
      <h1 className='about'>{about}</h1>
    </div>
  );
}
