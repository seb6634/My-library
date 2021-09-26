import Head from "next/head";

export default function Index() {
  let h1 = "Bienvenue dans ma biblioteque";
  return (
    <>
      <Head>
        <title>{h1}</title>
      </Head>
      <div
        className='container'
        style={{
          backgroundImage: "url(/library3.png",
          backgroundPosition: "center",
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
          height: "1000px",
          width: "100%",
        }}>
        <main>
          <h1 className='title'>{h1}</h1>
        </main>
      </div>
    </>
  );
}
