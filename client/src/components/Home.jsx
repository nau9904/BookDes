import React, { useRef, useState } from "react";

import styles from "../style";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import Input from "./Input";
import { useForm } from "../hook/formHook";

const Home = () => {
  const formRef = useRef();
  const [formState, inputHandler] = useForm(
    { data: { value: "", isValid: false } },
    false
  );

  const [loading, setLoading] = useState(false);

  const handelSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(formState.inputs.data.value)
    const responseData = await fetch("");
  };
  return (
    <section className="flex flex-col w-full">
      <div className={`flex md:flex-row flex-col justify-center gap-20`}>
        <div
          className={`${styles.paddingX} w-[500px] flex bg-black-100 rounded-2xl`}
        >
          <form
            className="mt-10 flex flex-col gap-5 w-full"
            ref={formRef}
            onSubmit={handelSubmit}
          >
            <Input
              id="data"
              element="input"
              type="data"
              label="Search Book"
              placeholder="book name"
              validators={[VALIDATOR_REQUIRE]}
              errorText="Please enter a valid bookname"
              onInput={inputHandler}
            />
            <div className={`flex justify-center items-center w-80`}>
              <button
                type="submit"
                disabled={!formState.isValid}
                className={`px-2 bg-discount-gradient rounded-lg w-[100px] h-[30px] ${
                  !formState.isValid ? "text-slate-500" : "text-green-500"
                }`}
              >
                {!loading ? "Search" : "Searching"}
              </button>
            </div>
          </form>
        </div>
        <div className={`w-[400px] h-[300px] flex justify-center gap-10 px-8 mt-10`}>
          <div className="flex-1 w-36 h-48 bg-white rounded-md sidebar"></div>
          <div className="flex-1 w-36 h-48 bg-white rounded-md sidebar"></div>
        </div>
      </div>

      <div className={`${styles.flexStart} flex-col ${styles.paddingX} w-full`}>
        <h2 className={`${styles.paragraph}`}>Book name : <span>Name</span></h2>
        <h2 className={`${styles.paragraph}`}>Author : <span>Author name</span></h2>
        <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[30.8px] text-yellow-400"> Description by AI</p>
        <p className="font-poppins font-normal text-dimWhite text-[12px] leading-[25px] text-green-600">Selling at Amazon about: 00$</p>
      </div>
    </section>
  );
};

export default Home;
