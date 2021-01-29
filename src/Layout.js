// import React, { useState } from "react";
import Aside from "./Aside";
import Main from "./Main";
import "./ab.css";
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import React, { Component } from "react";

class Layout extends Component {
  state = {
    collapsed: false,
    toggled: false,
  };
  componentDidMount() {
    console.log("Layout props", this.props);
  }
  handleToggleSidebar = (value) => {
    this.setState({ toggled: value });
    // setToggled(value);
  };
  handleCollapsedChange = (checked) => {
    this.setState({ collapsed: checked });
  };

  render() {
    return (
      <>
        <div className={`app ${this.state.toggled ? "toggled" : ""}`}>
          <Aside
            {...this.props}
            collapsed={this.state.collapsed}
            toggled={this.state.toggled}
            handleToggleSidebar={this.handleToggleSidebar}
          />

          <Main
            // style={{ width: "100%" }}
            {...this.props}
            toggled={this.state.toggled}
            collapsed={this.state.collapsed}
            handleCollapsedChange={this.handleCollapsedChange}
            handleToggleSidebar={this.handleToggleSidebar}
          />
        </div>
      </>
    );
  }
  // render() {
  //   return (
  //     <div className="app ">
  //       <Aside
  //         collapsed={this.state.collapsed}
  //         toggled={this.state.toggled}
  //         handleToggleSidebar={this.handleToggleSidebar}
  //       />

  //       <Main handleToggleSidebar={this.handleToggleSidebar} />
  //     </div>
  //   );
  // }
}

export default Layout;
