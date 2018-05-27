import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ScoreTable from "./components/ScoreTable";
import MatchLine from "./components/MatchLine";
import Navbar from "./components/Navbar";
import Table from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const scoreDiv = {
  margin: "auto",
  width: "90%",
  textAlign: "left"
};

const App = () => (
  <div style={styles}>
    <Navbar />
    <br />
    <h2>Games</h2>
    <br />
    <div style={scoreDiv}>
      <h4>
        <table>
          <tr>
            <th>Date</th>
            <th>Home</th>
            <th />
            <th />
            <th>Away</th>
            <th />
            <th>Location</th>
          </tr>
          <MatchLine
            date="06/27"
            home="Dig Hero 6"
            away="Block Party"
            home_score="0"
            away_score="0"
            location="Northrop Grumman"
          />
          <MatchLine
            date="06/31"
            home="Dig Hero 6"
            away="Out of Bounds Exception"
            home_score="0"
            away_score="0"
            location="Northrop Grumman"
          />
          <MatchLine
            date="07/03"
            home="Block Party"
            away=""
            home_score="0"
            away_score="0"
            location="Northrop Grumman"
          />
        </table>
      </h4>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
