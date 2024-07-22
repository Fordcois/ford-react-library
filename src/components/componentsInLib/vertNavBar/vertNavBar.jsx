import { useState } from "react";

import { IoHome, IoWallet } from "react-icons/io5";
import { BiExpandHorizontal } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';

import "./vertNavBar.css";

const VertNavbar = () => {
  // Depending on the structure of your site this function may need to be pushed up
  const toggleExpand = () => {
    setnavBarexpanded(!navBarexpanded);
  };
  const [navBarexpanded, setnavBarexpanded] = useState(false);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <nav className={`VertNavbar ${navBarexpanded ? "expanded" : ""}`}>
        <div className="VertNavbar-links">
          <ul>
            <ul>
              <li onClick={toggleExpand}>
                <BiExpandHorizontal className="react-icon" size={30} />
              </li>
              <li className="spacer"></li>
              <li>
                {/* The Link part of React Router Dom is used so you can push the state through links */}
              <Link to = '/' state = {{navBarexpanded: navBarexpanded}}>
                <span>Home</span>
                <IoHome className="react-icon" size={30} />{" "}
                </Link>
              </li>
              <li>
              <Link to = '/' state = {{navBarexpanded: navBarexpanded}}>
                <span>Link One</span>
                <FaHandshakeSimple className="react-icon" size={30} />{" "}
                </Link>
              </li>
              <li>
              <Link to = '/' state = {{navBarexpanded: navBarexpanded}}>
                <span>Link Two</span>
                <IoWallet className="react-icon" size={30} />{" "}
                </Link>
              </li>
            </ul>
          </ul>
        </div>

        <div className="bottom-section">
          <ul>
            <li className="logout-option">
            <Link to = '/' state = {{navBarexpanded: navBarexpanded}}>
              <span>Log in</span>
              <FiLogIn className="react-icon" size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`page-content ${navBarexpanded ? "shifted-content" : ""}`}
      >
        <p>
          This is my Page Content that will shift as the navigation bar slides
          in and out. You may need to adjust the values in the CSS to ensure
          they fit your project’s layout.
        </p>
        <p>
          There is a function named <b>toggleExpand</b> which sets the state of
          the navbar. The state of the navbar is used to control not only the
          visibility of the navigation bar but also the content and the degree
          to which it is pushed. The content div applies a different style with
          a larger margin when the navigation bar is expanded, creating the
          illusion that the content is being pushed to the side.
        </p>
        <p>
          As such, it may be necessary for you to separate the elements of this
          code and distribute them across different levels of your project to
          ensure everything functions correctly. Experiment with the placement
          of the function, the navbar, and the content CSS elements to ensure
          proper interaction across all pages.
        </p>
      </div>
    </div>
  );
};

export default VertNavbar;
