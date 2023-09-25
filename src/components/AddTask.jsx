import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddTask({ refreshProject, projectId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, projectId }; //backend Mathing!!!

    axios.post(`${API_URL}/api/tasks`, requestBody).then((response) => { 
     //  this is backend server routes that I set (check backend server vcs code)


  // ***************************** BACKEND MATCHING INFO ***********************************

     //When this POST request is sent, it's typically handled by the backend server, and the server 
     // should have a route or endpoint set up to handle POST requests to /api/tasks. 
     // This route on the server would likely include logic to create a new task based on the data 
     // in the requestBody object you're sending, and it would store that task in a database 
     // or perform some other relevant action.

  // ***************************** BACKEND MATCHING INFO ***********************************

      //reset
      setTitle("");
      setDescription("");

      refreshProject(); //props.refreshProject()
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
