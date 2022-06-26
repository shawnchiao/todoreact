import React from "react";

function ToDoItem(props) {
  const [clicked, setClicked] = React.useState(false);
  console.log(clicked);
  function cross() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }
  function deleting() {
    props.onChecked(props.id);
    setClicked((prevValue) => {
      return !prevValue;
    });
  }
  function combined() {
    if (!clicked) {
      cross();
    } else {
      deleting();
    }
    console.log(clicked);
  }
  return (
    <div onClick={combined}>
      <li style={{ textDecoration: clicked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
