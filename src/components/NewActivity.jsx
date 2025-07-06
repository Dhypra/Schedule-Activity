import React from "react";
import './com.css'
const NewActivity = ({activity,important,deadline,setActivity,setImportant,setDeadline,handleSubmit}) => {
  return (
    <div>
      <h1>New Activity</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div class="flex flex-col">
            <label>Activity</label>
            <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} required/>
            <label>Priority</label>
            <select value={important} onChange={(e) => setImportant(e.target.value)} required>
              <option value="">Pilih Priority</option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
            <label>Date</label>
            <input value={deadline} onChange={(e) => setDeadline(e.target.value)} type="date" required/>
            <button type="submit" class="bg-amber-800 align-center">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewActivity;
