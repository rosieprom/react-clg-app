import React from 'react';
import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./navigation.module.css";
import ToggleSwitch from "../toggleSwitch";
import { ThemeContext } from "../../theme/ThemeProvider";
import AuthContext from "../../auth/auth-context";
import Button from "../button";
import AvatarButton from "../avatarButton";

function Navigation() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  const { isLoggedIn } = useContext(AuthContext);
  let history = useHistory();

  return (
    <header>
      <nav className={styles.navigation}>
        <ul className={styles["nav-item"]}>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className={styles["nav-link-item"]}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles["nav-controls"]}>
        <ToggleSwitch
          isOn={darkMode}
          handleToggle={() => theme.setDarkMode(!darkMode)}
          leftAriaLabel="toggle dark mode"
          leftEmoji={<>&#127769;</>}
          rightAriaLabel="toggle light mode"
          rightEmoji={<>&#127774;</>}
        />
        {isLoggedIn && (
          <AvatarButton onClick={() => history.push("/profile")} />
        )}
        {!isLoggedIn && (
          <Button onClick={() => history.push("/login")}>Sign In</Button>
        )}
      </div>
    </header>
  );
}

export default Navigation;
