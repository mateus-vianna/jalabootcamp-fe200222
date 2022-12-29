/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllDogs } from "../services/dogService";

const DogDetails = () => {
  const { id } = useParams();

  const [dog, setDog] = useState();

  const initialize = async () => {
    try {
      const result = await getAllDogs();
      const filteredResult = result
        .filter((f) => {
          return f._id === id;
        })
        .at(0);
      console.log(filteredResult);
      if (filteredResult !== undefined) setDog(filteredResult);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    dog && (
      <div className="mt-4 h-[600px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="mt-4 flex flex-col w-full h-full max-h-[400px] sm:max-h-[550px] max-w-[400px] sm:max-w-[500px] gap-2 bg-amber-50 shadow-md rounded-md">
            <div className="px-4 py-4 space-y-2">
              <div className="flex justify-between ">
                <div>
                  <span className="font-bold pr-1">Name:</span>
                  {dog.name}
                </div>
                <div>
                  <span className="font-bold pr-1">Age:</span>
                  {dog.age}
                </div>
              </div>
              <div className="flex justify-between ">
                <div>
                  <span className="font-bold pr-1">Breed:</span>
                  {dog.breed}
                </div>
                <div>
                  <span className="font-bold pr-1">Transaction:</span>
                  {dog.transaction}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#f1eed7] h-60 sm:h-96 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40"
                height="40"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M20 5H4v14l9.292-9.294a1 1 0 0 1 1.414 0L20 15.01V5zM2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="rgba(150,127,0,0.6862745098039216)"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center w-full px-6 py-2">
              <a
                href="/list"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z"
                    fill="rgba(150,127,0,0.6862745098039216)"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DogDetails;
