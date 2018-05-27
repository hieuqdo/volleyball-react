import React from "react";
import { render } from "react-dom";
import {
  Button,
  Table,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

export default class ScoreTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home_score: "0",
      away_score: "0",
      home: "Dig Hero 6",
      away: "Block Party"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle_home = this.toggle_home.bind(this);
    this.toggle_away = this.toggle_away.bind(this);
    this.changeHome = this.changeHome.bind(this);
    this.changeAway = this.changeAway.bind(this);
  }

  handleChange(event) {
    this.setState({ away_score: 3 - event.target.value });
  }

  handleSubmit(event) {
    alert("Score submitted to database" + this.state.value);
    event.preventDefault();
    // redraw form with saved scores
  }

  toggle_home() {
    this.setState(prevState => ({
      home_dropdownOpen: !prevState.home_dropdownOpen
    }));
  }

  toggle_away() {
    this.setState(prevState => ({
      away_dropdownOpen: !prevState.away_dropdownOpen
    }));
  }

  changeHome(e) {
    this.setState({
      home_score: e.currentTarget.value,
      away_score: 3 - e.currentTarget.value
    });
  }

  changeAway(e) {
    this.setState({
      away_score: e.currentTarget.value,
      home_score: 3 - e.currentTarget.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>
          <Table>
            <tr>
              <td>{this.state.home}</td>
              <td>
                <Dropdown
                  isOpen={this.state.home_dropdownOpen}
                  toggle={this.toggle_home}
                >
                  <DropdownToggle>{this.state.home_score + ""}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Wins</DropdownItem>
                    <DropdownItem value="0" onClick={this.changeHome}>
                      0
                    </DropdownItem>
                    <DropdownItem value="1" onClick={this.changeHome}>
                      1
                    </DropdownItem>
                    <DropdownItem value="2" onClick={this.changeHome}>
                      2
                    </DropdownItem>
                    <DropdownItem value="3" onClick={this.changeHome}>
                      3
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
              <td>vs</td>
              <td>{this.state.away}</td>
              <td>
                <Dropdown
                  isOpen={this.state.away_dropdownOpen}
                  toggle={this.toggle_away}
                >
                  <DropdownToggle>{this.state.away_score + ""}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Wins</DropdownItem>
                    <DropdownItem value="0" onClick={this.changeAway}>
                      0
                    </DropdownItem>
                    <DropdownItem value="1" onClick={this.changeAway}>
                      1
                    </DropdownItem>
                    <DropdownItem value="2" onClick={this.changeAway}>
                      2
                    </DropdownItem>
                    <DropdownItem value="3" onClick={this.changeAway}>
                      3
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
          </Table>
        </h3>
      </form>
    );
  }
}

const rightAlign = {};
