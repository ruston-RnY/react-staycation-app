import React from "react";
import { NavLink } from "react-router-dom";
import BrandIcon from "../parts/IconText";
import Button from "../elements/Button/Button";

export default function Header(props) {
  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-text-icon mx-auto" href="/" type="link">
              Stay<span className="text-gray-900">cation.</span>
            </Button>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon></BrandIcon>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tes" className="nav-link">
                  Browse by
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/teds" className="nav-link">
                  Stories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/tess" className="nav-link">
                  Agents
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
