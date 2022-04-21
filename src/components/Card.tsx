import React from "react";
// import bit from "../assets/bit.svg";
const Card: React.FC<{
  item: any;
  bookmarkFunc?: (moviesid: string) => void;
}> = ({ item,
   bookmarkFunc 
  }) => {
  const {
    moviesid,
    title,
    year,
    movie_img,
    // movie_link,
    bookmarkedMovies,
  } = item;
  return (
    // <div>
    <div className="relative">
      <button
        onClick={() => bookmarkFunc?.(moviesid)}
        className="block bookmark absolute top-3 right-3 inline-block p-2 bg-[#6a6e72] rounded-full"
      >
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`hover:fill-[#fff] active:fill-[#fff] ${
            bookmarkedMovies && "fill-[#fff]"
          } `}
        >
          <path
            d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </button>
      <div
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
        }}
      >
        <img src={movie_img} alt="pix" className="w-full h-full" />
      </div>

      <div className="text-white opacity-55 font-extralight">
        <span className="mr-2">{year}</span>

        <span className="pr-2">
          <svg
            className="inline-block"
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
          </svg>
        </span>
        <span className="pr-2">
          <svg
            className="inline-block"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.75"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z"
              fill="white"
            />
          </svg>
        </span>

        <span className="mr-2">
          <svg
            className="inline-block"
            width="3"
            height="3"
            viewBox="0 0 3 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
          </svg>
        </span>
        <span className="mr-2">Movie</span>
        <span className="mr-2">PG</span>
      </div>

      <h2 className="text-white text-bold">{title}</h2>
    </div>
    // </div>
  );
};

export default Card;
