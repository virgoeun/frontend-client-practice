import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

const API_URL = "http://localhost:5005"; // our local server!

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}/api/projects`) // this is backend server routes that I set
      .then((response) => setProjects(response.data))
      //store the list of projects that we will fetch from the backend.
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />

        // In React, the key prop is a special prop that is used by React to optimize list rendering and updates,
        // and it should be associated with the top-level(parent) element being mapped over. 
        
        //React doesn't require you to pass the key prop explicitly as a prop to the child components being rendered within the map function; 
        // it's associated with the top-level element of each iteration of the loop.
        
        //In the ProjectCard component, the title, description, and _id props are expected.
        // The {...project} in the parent component is essentially passing these props 
        // to ProjectCard like this: <ProjectCard key={project._id} title={project.title} description={project.description} _id={project._id} />.
      ))}
    </div>
  );
}

export default ProjectListPage;
