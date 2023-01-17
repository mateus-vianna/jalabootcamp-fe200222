import React from "react";

const UserCard = ({ index, user, onClick }) => {
  return (
    <div className="flex flex-col mt-4 w-full min-w-[250px] w-[280px] bg-[#f1eed7] shadow-md rounded-md sm:justify-between sm:flex-row sm:w-full">
      <div className="flex flex-col w-300">
        <div>
          <span className="pr-2">Nº:</span>
          <span className="font-bold text-lg">{index}</span>
        </div>

        <div>
          <span className="pr-2">Name:</span>
          <span className="font-bold text-lg">{user.name}</span>
        </div>
        <div>
          <span className="pr-2">E-mail:</span>
          <span className="font-bold text-lg">{user.email}</span>
        </div>
        <div>
          <span className="pr-2">Type:</span>
          <span className="font-bold text-lg">{user.type}</span>
        </div>
        <div>
          <span className="pr-2">ID:</span>
          <span className="font-bold text-lg">{user._id}</span>
        </div>
      </div>

      <div className="flex w-full items-center justify-center space-x-20 mt-8 mb-4 sm:flex-col sm:w-[100px] sm:space-y-10 sm:space-x-0">
        <a
          href={`/admin/user/edit/${user._id}`}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"
              fill="rgba(150,127,0,0.6862745)"
            />
          </svg>
              </a>
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300" onClick={onClick}>
              <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z"
              fill="rgba(150,127,0,0.6862745)"
            />
          </svg>
              </button>
        
      </div>
    </div>
  );
};

export default UserCard;
