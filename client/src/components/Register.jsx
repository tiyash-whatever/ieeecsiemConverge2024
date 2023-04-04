import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import qr from "../assets/img/payqr.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import { registerUser } from "../helper/helper";
import styles from "../styles/Username.module.css";
import "../styles/register.css";
import Navbar from "./Navbar";

export default function Register() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      mobile: "",
      institute: "",
      tid: "",
      points: 0,
      time: Date().toString(),
      size:"",
      referredby:""
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise.then(function () {
        navigate("/");
      });
    },
  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="container-rules">
          <h1 className="display-5 text-center">Registration Rules</h1>
          <p>
            1. Click on the registration link to register for Elevate. Pay a
            minimal amount of Rs 100/- and log in to your account. Your
            candidature is subject to the verification of registration payment,
            you'll get a confirmation mail within 24hrs. The account of
            defaulters will be removed.
          </p>
          <p>
            2. After logging in you will see a list of events. From there you
            can register for the competitions. Events {">"} Competitions {">"}{" "}
            Click on the Poster {">"} Register for free .
          </p>
          <h1 className="display-5 text-center">Elevate Rules</h1>
          <p>
            1. The event will have seminars, workshops , inauguration talk ,
            panel discussions , competitions and games. For attending each event
            you will get a certain number of points. The points you gather will
            be reflected in your account on the website
          </p>
          <p>
            2. You will get a chance to acquire more than 500 points throughout
            the event in a span of 4 days. You need a minimum of 350 points to
            get a certificate,
          </p>
          <p>
            3. You will get chances to win amazing gifts using the points that
            you collected.
          </p>
        </div>
        <div>
          <h1 className="h1">Registrations Closed</h1>
        </div>
      </div>
    </>
  );
}
