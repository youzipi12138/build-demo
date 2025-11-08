import React from "react";

const List = ({ ListData, deleteHander }) => {
  return (
    <div>
      {ListData.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => deleteHander(item.id)}>删除</button>
        </div>
      ))}
    </div>
  );
};
export default List;
