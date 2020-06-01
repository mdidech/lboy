import React, { Fragment } from "react";
import spinner from "../images/spinner.gif";
const Spinner = ({ small }) => {
  const SpinnerWidth = () => {
    if (small) {
      return "60px";
    } else {
      return "200px";
    }
  };

  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: SpinnerWidth(), margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
