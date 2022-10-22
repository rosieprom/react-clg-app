import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./app.css";

import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import TodoListPage from "./pages/todoList";
import FoodGallery from "./pages/foodGallery";
import ContactMe from "./pages/contactMe";
import Book from "./pages/book";

import { ThemeContext } from "./theme/ThemeProvider";
import AuthContext from "./auth/auth-context";
import Login from "./pages/login";
import Profile from "./pages/profile";

export default function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  let history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password, name) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setName(name);
    setEmail(email);
    history.push("/");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        name: name,
        email: email,
        onLogin: loginHandler,
        onLogout: logoutHandler
      }}
    >
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path={`/projects/todo-app`}>
              <TodoListPage />
            </Route>
            <Route exact path={`/projects/food-gallery`}>
              <FoodGallery />
            </Route>
            <Route exact path={`/projects/books`}>
              <Book />
            </Route>
            <Route exact path={`/contact`}>
              <ContactMe />
            </Route>
            {!isLoggedIn && (
              <Route exact path={`/login`}>
                <Login />
              </Route>
            )}
            {isLoggedIn && (
              <Route exact path={`/profile`}>
                <Profile />
              </Route>
            )}
            <Route path="*">
              <h1>Oops! Sorry page not found!</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </AuthContext.Provider>
  );
}
