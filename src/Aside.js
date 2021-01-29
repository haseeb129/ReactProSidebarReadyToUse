// import React from "react";
import { Redirect, Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "./assets/bg1.jpg";

import React, { Component } from "react";

class Aside extends Component {
  // constructor() {
  //   super(this.props);
  // }
  componentDidMount() {
    console.log("Aside props", this.props);
  }
  render() {
    return (
      <ProSidebar
        image={sidebarBg}
        collapsed={this.props.collapsed}
        toggled={this.props.toggled}
        breakPoint="lg"
        onToggle={this.props.handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            Haseeb
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              <Link to="/home">Dashboard Khan</Link>
            </MenuItem>
            <MenuItem icon={<FaTachometerAlt />}>
              <Link to="/home/2">Dashboard Khan</Link>
            </MenuItem>
            <MenuItem icon={<FaGem />}>
              <Link to="/home/3">Text 2</Link>
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu title="Sub Menu Button" icon={<FaRegLaughWink />}>
              <MenuItem
                onClick={() => {
                  console.log("ASASAS", this.props.history);
                  this.props.history.push("home/3");
                  // this.props.history.push("/c2");
                }}
              >
                Dashboard Khan
              </MenuItem>
              <MenuItem>submenu 2</MenuItem>
              <MenuItem>submenu 3</MenuItem>
            </SubMenu>

            <SubMenu title="multiLevel" icon={<FaList />}>
              <SubMenu title="submenu 3">
                <MenuItem> submenu 3.1 </MenuItem>
                <MenuItem>submenu 3.2 </MenuItem>
                <SubMenu title="submenu">
                  <MenuItem>3.3.1</MenuItem>
                  <MenuItem>3.3.2</MenuItem>
                  <MenuItem>3.3.3</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    );
  }
}

export default Aside;

// const Aside = ({ collapsed, toggled, handleToggleSidebar }) => {
//   return (
//     <ProSidebar
//       // image={sidebarBg}
//       collapsed={collapsed}
//       toggled={toggled}
//       breakPoint="lg"
//       onToggle={handleToggleSidebar}
//     >
//       <SidebarHeader>
//         <div
//           style={{
//             padding: "24px",
//             textTransform: "uppercase",
//             fontWeight: "bold",
//             fontSize: 14,
//             letterSpacing: "1px",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Haseeb
//         </div>
//       </SidebarHeader>

//       <SidebarContent>
//         <Menu iconShape="circle">
//           <MenuItem icon={<FaTachometerAlt />}>Dashboard Khan</MenuItem>
//           <MenuItem icon={<FaGem />}>Text 2</MenuItem>
//         </Menu>
//         <Menu iconShape="circle">
//           <SubMenu title="Sub Menu Button" icon={<FaRegLaughWink />}>
//             <MenuItem
//               onClick={() => {
//                 console.log("ASASAS", this.props);
//                 // this.props.history.push("/c2");
//               }}
//             >
//               Dashboard Khan
//             </MenuItem>
//             <MenuItem>submenu 2</MenuItem>
//             <MenuItem>submenu 3</MenuItem>
//           </SubMenu>

//           <SubMenu title="multiLevel" icon={<FaList />}>
//             <SubMenu title="submenu 3">
//               <MenuItem> submenu 3.1 </MenuItem>
//               <MenuItem>submenu 3.2 </MenuItem>
//               <SubMenu title="submenu">
//                 <MenuItem>3.3.1</MenuItem>
//                 <MenuItem>3.3.2</MenuItem>
//                 <MenuItem>3.3.3</MenuItem>
//               </SubMenu>
//             </SubMenu>
//           </SubMenu>
//         </Menu>
//       </SidebarContent>
//     </ProSidebar>
//   );
// };

// export default Aside;
