import { useIntl } from "react-intl";
// import Switch from 'react-switch';
import { FaHeart, FaBars } from "react-icons/fa";
import reactLogo from "./assets/logo.svg";
import C2 from "./C2";
import C1 from "./C1";
import C3 from "./C3";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// const Main = ({
//   collapsed,
//   rtl,
//   image,
//   handleToggleSidebar,
//   handleCollapsedChange,
//   handleRtlChange,
//   handleImageChange,
// }) => {
//   // const intl = useIntl();
//   return (
//     // <BrowserRouter>
//     <main>
//       <div className="btn-toggle" onClick={() => this.props.handleToggleSidebar(true)}>
//         <FaBars />
//       </div>
//       <Switch>
//         <Route exact path="/home/2" render={(props) => <C2 {...props} />} />
//         <Route exact path="/home/3" render={(props) => <C3 {...props} />} />
//         <Route exact path="/home" render={(props) => <C1 {...props} />} />
//       </Switch>
//     </main>
//     // </BrowserRouter>
//   );
// };

//export default Main;

import React, { Component } from "react";

class Main extends Component {
  componentDidMount() {
    console.log("Props Main", this.props);
  }
  render() {
    return (
      <main>
        <div
          className="btn-toggle"
          onClick={() => this.props.handleToggleSidebar(true)}
        >
          <FaBars />
        </div>
        <Switch>
          <Route exact path="/home/2" render={(props) => <C2 {...props} />} />
          <Route exact path="/home/3" render={(props) => <C3 {...props} />} />
          <Route exact path="/home" render={(props) => <C1 {...props} />} />
        </Switch>
      </main>
    );
  }
}

export default Main;
