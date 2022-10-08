import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Loader from "../components/Loader";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  function authCheck() {
    if (!user) {
      return router.push("/login");
    } else {
      return router.push("/");
    }
  }

  useEffect(() => {
    authCheck();

    const timeout = setTimeout(() => {
      setRedirect(true);
      router.push("/login");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!user && !redirect) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <h1 className="text-xl text-center mt-5 text-facebook">
        WELCOME TO THE FACEBOOK HOME PAGE
      </h1>
    </>
  );
};

export default Home;
