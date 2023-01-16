import React from "react";

const DogCard = ({ index, dog }) => {
  return (
    <div className="flex flex-row w-full min-w-[250px] max-w-[300px] bg-[#f1eed7] shadow-md rounded-md ">
      <div className="flex flex-col">
        <div>
          <span className="pr-2">Nº:</span>
          <span className="font-bold text-lg">{index}</span>
        </div>

        <div>
          <span className="pr-2">Name:</span>
          <span className="font-bold text-lg">{dog.name}</span>
        </div>
        <div>
          <span className="pr-2">Age:</span>
          <span className="font-bold text-lg">{dog.age}</span>
        </div>
        <div>
          <span className="pr-2">Breed:</span>
          <span className="font-bold text-lg">{dog.breed}</span>
        </div>
        <div>
          <span className="pr-2">Transaction:</span>
          <span className="font-bold text-lg">{dog.transaction}</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-end mr-4">
        <a
          href={`/dogDetails/${dog._id}`}
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
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2v4z"
              fill="rgba(150,127,0,0.6862745098039216)"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default DogCard;
