import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border: 3px solid #fff;
`;
const Loader = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
        }}
      >
        <ClipLoader color={"#fff"} css={override} size={150} />
      </div>
    </>
  );
};

export default Loader;
