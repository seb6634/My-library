import { useRouter } from "next/router";

export default function book() {
  const router = useRouter();

  const titleClickHandler = () => {
    router.replace("/");
  };

  return <h1 onclick={titleClickHandler}>{router.query.slug}</h1>;
}
