import React from "react";

const List = ({ ListData, dispatch }) => {
  return (
    <div>
      {ListData.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch({ type: "delete", id: item.id })}>
            删除
          </button>
          <button>修改name</button>
        </div>
      ))}
    </div>
  );
};
export default List;
