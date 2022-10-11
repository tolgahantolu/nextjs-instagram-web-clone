import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/Input";
import { GrFacebook } from "react-icons/gr";

import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useRouter } from "next/router";

import { register } from "../../firebase";
import { Form, Formik } from "formik";
import { RegisterSchema } from "../../validation";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";

const Register = () => {
  const router = useRouter();

  //  !submit handler
  const handlerSubmit = async (values, actions) => {
    await register(values);
    router.push("/");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[350px] grid gap-y-3">
        <div className=" bg-white border px-[40px] pt-10 pb-6">
          <Link href="/">
            <a className="flex justify-center mb-2">
              <Image
                width={175}
                height={51}
                src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              />
            </a>
          </Link>
          <p className="text-[17px] font-semibold w-full text-center text-[#8e8e8e] line-he">
            Sign up to see photos and videos from your friends.
          </p>
          <Button>
            <Link href="/">
              <a className="flex">
                <span className="mr-2">
                  <GrFacebook size={16} />
                </span>
                Log in with Facebook
              </a>
            </Link>
          </Button>

          <Seperator />

          <Formik
            validationSchema={RegisterSchema}
            initialValues={{
              email: "",
              full_name: "",
              username: "",
              password: "",
            }}
            onSubmit={handlerSubmit}
          >
            {({ isSubmitting, dirty, isValid, values }) => (
              <Form className="grid gap-y-2">
                {/* inputs */}
                <Input type="email" name="email" label="Email" />

                <Input name="full_name" label="Full Name" />
                <Input name="username" label="Username" />
                <Input type="password" name="password" label="Password" />

                <p className="text-center text-xs text-[#8e8e8e] py-2">
                  People who use our service may have uploaded your contact
                  information to Instagram.{" "}
                  <Link href="/">
                    <a className="font-semibold">Learn More</a>
                  </Link>
                </p>
                <p className="text-center text-xs text-[#8e8e8e] pb-2">
                  By signing up, you agree to our{" "}
                  <Link href="/">
                    <a className="font-semibold">
                      Terms , Privacy Policy and Cookies Policy.
                    </a>
                  </Link>
                </p>

                {/* btn */}
                <Button
                  disabled={isSubmitting || !dirty || !isValid}
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white border p-4 text-sm text-center font-medium">
          Have an account?{" "}
          <Link href="/login">
            <a className="text-brand">Log in</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
