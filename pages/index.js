import Head from "next/head";

export default function Index() {
  let h1 = "Bienvenue dans ma biblioteque";
  return (
    <>
      <Head>
        <title>{h1}</title>
      </Head>
      <main>
        <h1 className='title'>{h1}</h1>
      </main>
    </>
  );
}
