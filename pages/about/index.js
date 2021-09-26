import Head from "next/head";
export default function About({ about = "A propos" }) {
  return (
    <>
      <Head>
        <title>{about}</title>
      </Head>
      <div
        className='container'
        style={{
          backgroundImage: "url(/about.png",
          backgroundPosition: "center",
          backgroundSize: "70%",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}>
        <h1 className='title'>{about}</h1>
      </div>
    </>
  );
}
