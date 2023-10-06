import React from "react";
import styles from "./navbar.module.css";
import { CgMenuGridR } from "react-icons/cg";
import { SiVisualbasic } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <CgMenuGridR />
              <NavLink
                to={`test`}
                cclassName={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Test Navigate
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
