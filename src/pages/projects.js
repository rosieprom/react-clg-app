import React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";

const Projects = () => {
  const { url } = useRouteMatch();

  return (
    <section style={{ height: "100vh" }}>
      <h1>Projects</h1>
      <p>I&apos;ll be documenting all my small projects here</p>
      <ul>
        <li>
          <NavLink to={`${url}/todo-app`}>Todo List</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/food-gallery`}>Food Gallery</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/books`}>Books</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
