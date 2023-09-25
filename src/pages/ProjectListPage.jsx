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
      .get(`${API_URL}/api/projects`)
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

        //In the ProjectCard component, the title, description, and _id props are expected.
        // The {...project} in the parent component is essentially passing these props 
        // to ProjectCard like this: <ProjectCard key={project._id} title={project.title} description={project.description} _id={project._id} />.
      ))}
    </div>
  );
}

export default ProjectListPage;
