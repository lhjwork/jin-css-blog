import React from "react";
import styles from "./navbar.module.css";
import { CgMenuGridR } from "react-icons/cg";
import { SiVisualbasic } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <aside>
      <section className="side-bar__icon-box">
        <section className="side-bar__icon-1">
          <CgMenuGridR />
        </section>
      </section>
      <ul>
        <li>
          <SiVisualbasic />
        </li>
        <ul>
          <li>
            <Link to={`test`}>test</Link>
          </li>
        </ul>
        <li>
          <MdAnimation />
        </li>
        <ul>
          <li>
            <Link to={`/`}>home</Link>
          </li>
        </ul>
      </ul>
    </aside>
  );
};

export default Navbar;
