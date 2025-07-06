import React, { useState } from "react";
import "./com.css";

const ProgressList = ({ listActivity, handleDoneSubmit }) => {
  const [doneInputs, setDoneInputs] = useState({});

  const handleChange = (index, value) => {
    setDoneInputs({ ...doneInputs, [index]: value });
  };

  const handleSubmit = (e, index) => {
    e.preventDefault();
    handleDoneSubmit(index, doneInputs[index] || "");
  };

  return (
    <div>
      <h1>Progress:</h1>
      <div className="flex flex-row gap-3">
        {listActivity.map((item, index) => {
          if (item.done !== "") return null;
          return (
            <div className="card" key={index}>
              <form onSubmit={(e) => handleSubmit(e, index)}>
                <div className="flex flex-col">
                  <h1>{item.activity}</h1>
                  <h2>
                    <span>{item.important}</span> Priority
                  </h2>
                  <h2>
                    Deadline: <span>{item.deadline}</span>
                  </h2>
                  <label>Finish date</label>
                  <input
                    type="date"
                    value={doneInputs[index] ?? item.done}
                    onChange={(e) => handleChange(index, e.target.value)}
                    required
                  />
                  <button type="submit" className="bg-amber-800">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressList;
