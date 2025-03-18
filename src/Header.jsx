import "./App.css";
import icons from "./assets/icons.png";
import mmli from "./assets/mmli.svg";
import { useEffect, useState } from "react";
import "typeface-roboto";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "none",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "50px",
        height: "7rem",
      }}
    >
      <img
        className="mmli-img"
        src={mmli}
        alt="mmli"
        height={"80px"}
        style={{ padding: "0px" }}
      />
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "3em",
          fontFamily: "Roboto",
          fontWeight: " 300",
        }}
      >
        Digital Molecule Maker
      </h1>
    </header>
  );
};

export default Header;
