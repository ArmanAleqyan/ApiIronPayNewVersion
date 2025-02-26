import React, { useCallback, useEffect } from "react";
import "../styles/header.css";
import { useDispatch, useSelector } from "react-redux";
import { setToggleBurger } from "../redux/toggleBurgerSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { isOpenAside } = useSelector(
    ({ toggleBurgerSlice }) => toggleBurgerSlice
  );

  const handleToggleAside = useCallback(
    (open) => {
      dispatch(setToggleBurger(open));
    },
    [dispatch]
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".left-sidebar");
      const burger = document.querySelector(".burger");

      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        !burger.contains(event.target)
      ) {
        handleToggleAside(false);
      } else if (burger && burger.contains(event.target)) {
        handleToggleAside(!isOpenAside);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch, handleToggleAside, isOpenAside]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth <= 1200 && isOpenAside) {
          dispatch(setToggleBurger(false));
        }
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [dispatch, isOpenAside]);

  return (
    <header className="header">
      <div className="header-container">
        {/* <div className="logo"></div> */}
        {/* <nav className="nav">
          <a href="#" className="nav-item">Guides</a>
          <a href="#" className="nav-item">API Reference</a>
          <a href="#" className="nav-item">Community</a>
          <a href="#" className="nav-item">Discord</a>
          <a href="#" className="nav-item">Blog</a>
          <a href="#" className="nav-item">FAQ</a>
          <a href="#" className="nav-item">Bug Bounty</a>
          <a href="#" className="nav-item">Announcements</a>
        </nav> */}
        <div className="header-wrapper">
          <div className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="empty"></div>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
            <button className="search-button">CTRL + K</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
