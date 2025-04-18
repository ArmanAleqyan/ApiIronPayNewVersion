import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import "../styles/Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { setToggleBurger } from "../redux/toggleBurgerSlice";

const menuItems = [
  {
    title: "AUTH",
    subItems: [
      { name: "OAuth 1.0", path: "/api-key", method: "" },
      { name: "OAuth 2.0", path: "/login", method: "POST" },
      { name: "Refresh Token", path: "/refresh-token", method: "POST" },
    ],
  },
  {
    title: "Balance",
    subItems: [{ name: "Balance", path: "/balance", method: "GET" }],
  },
  {
    title: "Order",
    subItems: [
      { name: "Payment", path: "/payment", method: "POST" },
      { name: "PaymentPage", path: "/paymentPage", method: "POST" },
      { name: "Withdraw", path: "/withdraw", method: "POST" },
      { name: "Status Order", path: "/status-order", method: "POST" },
      { name: "Appeal", path: "/appeal", method: "POST" },
      { name: "Order List", path: "/order-list", method: "POST" },
      { name: "Hold Amounts", path: "/hold-amounts", method: "POST" },
    ],
  },
  {
    title: "Callback",
    subItems: [
      { name: "Callbacks", path: "/callbacks", method: "" },
      // { name: "Order", path: "/payment-callback", method: "" },
      // { name: "Appeal", path: "/appeal-callback", method: "" },
    ],
  },
  {
    title: "API Description",
    subItems: [
      { name: "Header", path: "/header", method: "" },

      { name: "Response", path: "/response", method: "" },
    ],
  },
];

const LeftSidebar = () => {
  // Изначально открываем все секции
  const dispatch = useDispatch();
  const [openSections, setOpenSections] = useState(
    Object.fromEntries(menuItems.map((_, index) => [index, true]))
  );
  const { isOpenAside } = useSelector(
    ({ toggleBurgerSlice }) => toggleBurgerSlice
  );
  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleToggleAside = useCallback(() => {
    dispatch(setToggleBurger(false));
  }, [dispatch]);

  return (
    <aside className={`left-sidebar ${isOpenAside ? "opened" : ""}`}>
      <div className="sidebar-container">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-section">
            <div
              className="menu-title"
              onClick={() => toggleSection(index)}>
              <span>{item.title}</span>
              <FaAngleDown
                className={`arrow-icon ${openSections[index] ? "open" : ""}`}
              />
            </div>
            <ul className={`submenu ${openSections[index] ? "open" : ""}`}>
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="submenu-item">
                  <NavLink
                    to={subItem.path}
                    className={({ isActive }) =>
                      isActive ? "active-link" : "normal-link"
                    }
                    onClick={handleToggleAside}>
                    {subItem.name}{" "}
                    <span
                      className={`method-badge ${subItem.method.toLowerCase()}`}>
                      {subItem.method}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="divider" />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default LeftSidebar;
