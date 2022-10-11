import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/Input";
import { GrFacebook } from "react-icons/gr";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useRouter } from "next/router";

import { login } from "../../firebase";
import { Form, Formik } from "formik";
import { LoginSchema } from "../../validation";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
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

  if (user) {
    router.push("/");
  }

  //  !submit handler
  const handlerSubmit = async (values, actions) => {
    await login(values.username, values.password);
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

          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handlerSubmit}
          >
            {({ isSubmitting, dirty, isValid, values }) => (
              <Form className="grid gap-y-2">
                {/* inputs */}
                <Input
                  type="text"
                  name="username"
                  label="Phone number, username or email"
                />

                <Input type="password" name="password" label="Password" />

                {/* btn */}
                <Button
                  disabled={isSubmitting || !dirty || !isValid}
                  type="submit"
                >
                  Log in
                </Button>

                {/* other */}
                <Seperator />

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
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white border p-4 text-sm text-center font-medium">
          Don't have an account?{" "}
          <Link href="/register">
            <a className="text-brand">Sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
