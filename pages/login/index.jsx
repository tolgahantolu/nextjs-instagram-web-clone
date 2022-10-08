import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/Input";
import { GrFacebook } from "react-icons/gr";

import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useRouter } from "next/router";

import { login } from "../../firebase";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const enable = username && password;

  const ref = useRef();

  const router = useRouter();

  useEffect(() => {
    let images = ref.current.querySelectorAll(".img-wrapper");
    const total = images.length;
    let current = 0;

    const logingSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add("opacity-0");

      images[current].classList.remove("opacity-0");

      current = current === total - 1 ? 0 : (current += 1);
    };
    logingSlider();

    const interval = setInterval(logingSlider, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  //  !submit handler
  const handlerSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);

    router.push("/");
  };

  return (
    <div className="h-full w-full flex overflow-auto flex-wrap gap-x-8 justify-center items-center">
      <div className="hidden md:block relative w-[380px] h-[581px] bg-login-pattern bg-[length:468.32px_634.15] bg-[top_left_-46px]">
        <div
          className="absolute w-[250px] h-[538px] top-[27px] right-[18px]"
          ref={ref}
        >
          <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear img-wrapper">
            <Image
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
              width={250}
              height={538}
            />
          </div>
          <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear img-wrapper">
            <Image
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
              width={250}
              height={538}
            />
          </div>
          <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear img-wrapper">
            <Image
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
              width={250}
              height={538}
            />
          </div>
          <div className="absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear img-wrapper">
            <Image
              src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
              width={250}
              height={538}
            />
          </div>
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border px-[40px] pt-10 pb-6">
          <Link href="/">
            <a className="flex justify-center mb-8">
              <Image
                width={175}
                height={51}
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              />
            </a>
          </Link>

          <form className="grid gap-y-2" onSubmit={handlerSubmit}>
            {/* inputs */}
            <Input
              type="text"
              value={username}
              label="Phone number, username or email"
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* btn */}
            <button
              type="submit"
              disabled={!enable}
              className="mt-2 h-[30px] rounded bg-brand font-semibold text-white text-sm disabled:opacity-50"
            >
              Log in
            </button>

            {/* other */}
            <div className="flex items-center my-2 mb-3">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 font-semibold text-gray-500 text-[13px]">
                OR
              </span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>

            <Link href="/">
              <a className="flex gap-x-2 justify-center items-center text-sm font-semibold text-facebook mb-2.5">
                <GrFacebook size={16} />
                Log in with Facebook
              </a>
            </Link>
            <Link href="/">
              <a className="text-xs flex justify-center items-center text-link font-semibold">
                Forgot Password?
              </a>
            </Link>
          </form>
        </div>

        <div className="bg-white border p-4 text-sm text-center font-medium">
          Don't have an account?{" "}
          <Link href="/">
            <a className="text-brand">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
