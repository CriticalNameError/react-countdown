import React, { Component } from "react";
import Countdown from "./Countdown.js";
import logo from "./logo.svg";
import github from "./github.png";
import WineGlass from "./WineGlass.js";
//import {ReactComponent as WineGlass} from "../public/wine-glass.svg";
class App extends Component {
  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div
        className="App"
        style={{
          background: "none",
          backgroundImage:
            "linear-gradient(-45deg,rgba(113,79,155,.5),#714f9b)",
          color: "white",
          display: "table",
          position: "relative",
          height: "100vh",
          width: "100vw",
          textAlign: "center",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div><WineGlass /></div>
       <center>
        <span
          style={{
            verticalAlign: "middle",
            display: "table-cell",
            marginBottom: "30px",
          }}
        >
          <h1>
            &bdquo;Das Leben ist viel zu kurz, um schlechten Wein zu
            trinken.&ldquo; <br />{" "}
            <span style={{ fontSize: "20px", color: "lightgrey" }}>
              – Johann Wolfgang von Goethe
            </span>
          </h1>
          <hr
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              border: "0",
              borderBottom: "1px solid white",
            }}
          />
          <span style={{ fontSize: "3em" }}>
            <Countdown date={`${year}-09-15T00:00:00`} />
          </span>
        </span>
        </center>
      </div>
    );
  }
}

export default App;
