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

        <div className="flex justify-center items-center rambo">
          {/* <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}> */}
          <div className="flex justify-center items-center">
          {/* <div className={styles.glass} style={{ width: "45%", paddingTop: '3em'}}> */}
          <div className="signup form-bx">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Register</h4>
              <span className="py-2 text-xl text-center text-gray-500">
                Happy to join you!
              </span>
            </div>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              {/* <div className="profile flex justify-center py-2">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={styles.profile_img}
                  alt="avatar"
                />
              </label>

              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <label htmlFor="profile">Profile Picture*</label> */}
              {/* username */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("username")}
                  className="form-control"
                  type="text"
                  placeholder="Username"
                />
                <label htmlFor="username">Username*</label>
              </div>
              {/* first name */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("firstName")}
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
                <label htmlFor="firstName">First Name*</label>
              </div>
              {/* last name */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("lastName")}
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                />
                <label htmlFor="lastName">Last Name*</label>
              </div>
              {/* email */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("email")}
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
                <label htmlFor="email">Email*</label>
              </div>

              {/* password */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("password")}
                  className="form-control"
                  type="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password*</label>
              </div>
              {/* mobile */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("mobile")}
                  className="form-control"
                  type="text"
                  placeholder="Mobile Number"
                />
                <label htmlFor="mobile">Mobile Number*</label>
              </div>

              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("institute")}
                  className="form-control"
                  type="text"
                  placeholder="institute"
                />
                <label htmlFor="institue">Institute Name*</label>
              </div>
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("size")}
                  className="form-control"
                  type="text"
                  placeholder="size"
                />
                <label htmlFor="size">T-Shirt Size{"(eg. M,L,XL...)"}*</label>
              </div>
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("referredby")}
                  className="form-control"
                  type="text"
                  placeholder="referredby"
                />
                <label htmlFor="referredby">Referred By</label>
              </div>
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("tid")}
                  className="form-control"
                  type="text"
                  placeholder="tid"
                />
                <label htmlFor="tid">UPI Transaction ID*</label>
              </div>
              <div className="mt-2 mb-1 payment-QR">
                <img src={qr} alt="payment QR" />
              </div>
              <div>
                <p className="h3">Scan and Pay Here</p>
                <p className="h5">UPI ID: ananyabanerjee2002-2@okaxis</p>
                <p className="note mb-3">
                  Your candidature is subject to the verification of
                  registration payment, you'll get a confirmation mail within
                  24hrs. The account of defaulters will be removed.
                </p>
              </div>
              <button className={styles.btn} type="submit">
                Register
              </button>

              {/* <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email*"
              />
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username*"
              />
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="text"
                placeholder="Password*"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>
            </div> */}

              <div className="text-center py-4">
                <span className="text-gray-500">
                  Already Register?{" "}
                  <Link className="text-red-500" to="/">
                    Login Now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
