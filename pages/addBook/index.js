import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function AddBook() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmittedHandler = async (data) => {
    const response = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const fetchedData = await response.json();

    if (!response.ok) {
      console.log(fetchedData.message || "Une erreur est survenue dans l'API.");
    } else {
      console.log(fetchedData.message);
      router.push("/books");
    }
  };

  return (
    <>
      <Head>
        <title>Ajouter un livre</title>
      </Head>
      <h1 className='title'>Ajouter un livre</h1>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <main
          style={{
            backgroundColor: "#f3f3f3",
            padding: "30px",
          }}>
          {(errors.title ||
            errors.tag ||
            errors.year ||
            errors.description ||
            errors.author ||
            errors.img) && (
            <div
              style={{
                margin: "15px 0 15px 0",
                backgroundColor: "#98c1d9",
                color: "white",
                padding: "15px",
                borderRadius: "5px",
              }}>
              Veuillez remplir tous les champs du formulaire.
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmittedHandler)}>
            <p>
              <label htmlFor='title'>Titre</label>
              <input
                id='title'
                placeholder='Titre du livre'
                style={{
                  display: "block",
                  width: "400px",
                  border: "1px solid gray",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                {...register("title", {
                  required: true,
                })}
              />
            </p>
            <p>
              <label htmlFor='tag'>Theme</label>
              <input
                id='tag'
                placeholder='Theme du livre'
                style={{
                  display: "block",
                  width: "400px",
                  border: "1px solid gray",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                {...register("tag", {
                  required: true,
                })}
              />
            </p>
            <p>
              <label htmlFor='year'>Année</label>
              <input
                id='year'
                placeholder='Année de sortie du livre'
                style={{
                  display: "block",
                  width: "400px",
                  border: "1px solid gray",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                {...register("year", {
                  required: true,
                })}
              />
            </p>
            <p>
              <label htmlFor='img'>Image</label>
              <input
                id='year'
                placeholder="Lien de l'image"
                style={{
                  display: "block",
                  width: "400px",
                  border: "1px solid gray",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                {...register("img", {
                  required: true,
                })}
              />
            </p>
            <p>
              <label htmlFor='author'>Auteur</label>
              <textarea
                id='author'
                placeholder='Auteur du livre'
                style={{
                  display: "block",
                  width: "400px",
                  border: "1px solid gray",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                  fontFamily: "arial",
                }}
                {...register("author", {
                  required: true,
                })}></textarea>
            </p>
            <p>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                placeholder='Description du livre'
                rows='5'
                style={{
                  display: "block",
                  width: "400px",
                  border: "1px solid gray",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                  marginTop: "5px",
                  fontFamily: "arial",
                }}
                {...register("description", {
                  required: true,
                })}></textarea>
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}>
              <button
                style={{
                  border: 0,
                  backgroundColor: "#98c1d9",
                  color: "white",
                  padding: "10px 15px 10px 15px",
                  borderRadius: "5px",
                }}>
                Ajouter
              </button>
            </div>
          </form>
        </main>
      </section>
    </>
  );
}
