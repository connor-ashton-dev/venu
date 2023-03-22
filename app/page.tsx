"use client";

import Image from "next/image";
import axios from "axios";
import bg from "../public/background.jpg";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const handleForm = async () => {
    const data = {
      name: name,
      email: email,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/addEmail";
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    console.log(response);
    setDidSubmit(true);
  };

  return (
    <>
      {/* First screen */}
      <section className="h-screen w-screen flex flex-col items-center relative">
        <Image
          src={bg}
          alt="bg"
          style={{
            objectFit: "cover",
            overflow: "hidden",
            height: "100%",
            position: "absolute",
            top: 0,
          }}
          className="-z-10"
        />
        {/* Title container */}
        <div className="mt-[70%] lg:mt-80 lg:mx-40 py-10 px-10 lg:py-20 lg:px-10 flex flex-col justify-center items-center shadow-xl border rounded-xl bg-white absolute">
          <h1 className="text-xl w-60 lg:w-80 lg:text-2xl mb-8 lg:mb-12 text-center">
            Let's find your dream wedding venue
          </h1>
          <a
            href="#form"
            className="rounded-lg px-4 py-2 hover:shadow-md text-lg lg:text-xl bg-theme-gold text-white"
          >
            Sign up for our waitlist
          </a>
        </div>
      </section>

      {/* About section */}
      <section
        className="h-screen flex flex-col items-center  bg-theme-slate text-white text-xl tracking-wide"
        id="about"
      >
        <h1 className="mt-40 mb-20 text-4xl">Who we are</h1>
        <div className="w-80 text-center flex flex-col items-center gap-8">
          <p>Finding a wedding venue is hard, but it doesn't have to be.</p>
          <p>
            With 100% price transparency and the BEST selection of local venues,
            we can find your perfect venue. Today!
          </p>
        </div>
      </section>

      {/* Sign up section */}
      <section
        className="h-screen flex flex-col items-center bg-theme-gold"
        id="form"
      >
        <div className="flex flex-col gap-10 py-10 px-10 lg:py-20 lg:px-20 items-start mt-60 lg:mt-80 bg-white rounded-xl">
          {!didSubmit ? (
            <>
              <h1 className="text-xl">Sign up for early access</h1>
              <input
                placeholder="Name"
                className="border-b focus:outline-none w-60"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Email"
                className="border-b focus:outline-none w-60"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="w-full flex flex-row justify-end">
                <button className="text-right" onClick={handleForm}>
                  Submit
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h1 className="pb-4">Thank you.</h1>
              <p>We will get back to you shortly</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
