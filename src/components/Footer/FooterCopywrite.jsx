import React from "react";

const FooterCopywrite = () => {
  return (
    <div className="no-gutters social-container text-light">
      <div
        style={{
          textAlign: "center",
          padding: "3px",
          background: "#09634e",
        }}
      >
        &copy;{" "}
        <a style={{ color: "white" }} href="https://provaswito.org">
          Provaswito.org
        </a>{" "}
        All right Reversed. Developed and Maintained by{" "}
        <a href="https://sumantakabiraj.com" style={{ color: "white" }}>
          Sumoontoo
        </a>
      </div>
    </div>
  );
};

export default FooterCopywrite;
