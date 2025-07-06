import { useState } from "react";
import NewActivity from "./NewActivity";
import ProgressList from "./ProgressList";
import DoneList from "./DoneList";

const Menu = () => {
  const [listActivity, setListActivity] = useState([]);

  console.log(listActivity);
  const [activity, setActivity] = useState("");
  const [important, setImportant] = useState("");
  const [deadline, setDeadline] = useState("");
  const [done, setDone] = useState("");
  const [index, setEditIndex] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { activity, important, deadline, done };
    setListActivity([...listActivity, newData]);
    setActivity("");
    setImportant("");
    setDeadline("");
  };

  const handleEdit = (index, newDoneDate) => {
    const updatedList = [...listActivity];
    updatedList[index].done = newDoneDate;
    setListActivity(updatedList);
  };

  return (
    <div>
      <NewActivity
        activity={activity}
        important={important}
        deadline={deadline}
        done={done}
        setActivity={setActivity}
        setImportant={setImportant}
        setDeadline={setDeadline}
        setDone={setDone}
        handleSubmit={handleSubmit}
      />
      <br />
      <hr />
      <ProgressList listActivity={listActivity} handleDoneSubmit={handleEdit} />
      <br />
      <hr />
      <DoneList listActivity={listActivity} />
    </div>
  );
};

export default Menu;
