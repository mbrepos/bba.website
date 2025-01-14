import React from "react";
import constructiongif from "../images/construction.gif"
import "../styles/construction.css"
import { useNavigate } from "react-router-dom";

export const Construction = () => {


    const navigate = useNavigate()

    return (
        <div className="construction" style={{display: "flex", alignItems: "center", justifyContent: "center", background:"#1c1c1c", flexDirection: "column", height: "100vh"}}>
            <img src={constructiongif} style={{width: "40%"}}/>
            <h1 style={{fontWeight: "bold", color: "white"}}>Sorry, you flew too high and we lost you.</h1>
            <p style={{fontWeight: "bold", color: "white", margin: "10px"}}> This page is still being built out.</p>
            <button className="construction-btn" onClick={() => navigate("/")}>Lets head back to the nest?</button>
        </div>
    );
  };