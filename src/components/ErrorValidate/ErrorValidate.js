import React from "react";

const ErrorValidate = ({check}) => {
  return (
    <>
      <div className="checker">
        {check === "name" ? (
          <p className="error">Error: Please entry your name</p>
        ) : (
          ""
        )}

        {check === "email" ? (
          <p className="error">Error: Please check your email id</p>
        ) : (
          ""
        )}

        {check === "password" ? (
          <p className="error">
            Error: Please Make sure your passwords and confirm passwords match!
          </p>
        ) : (
          ""
        )}
        {check === "success" ? (
          <p className="success">Successfully Created!</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ErrorValidate;