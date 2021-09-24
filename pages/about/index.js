import Head from "next/head";
export default function About({ about = "A propos" }) {
  return (
    <>
      <Head>
        <title>{about}</title>
      </Head>
      <div className='container'>
        <h1 className='title'>{about}</h1>
      </div>
    </>
  );
}
