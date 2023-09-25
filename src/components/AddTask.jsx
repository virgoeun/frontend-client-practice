import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddTask({ refreshProject, projectId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, projectId }; //props.projectId

    axios.post(`${API_URL}/api/tasks`, requestBody).then((response) => {
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
