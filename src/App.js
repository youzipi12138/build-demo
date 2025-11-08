// import React, { useState } from 'react';
// import Header from './components/Header';
// import Counter from './components/Counter';
// import TodoList from './components/TodoList';
// import UserCard from './components/UserCard';
// import './App.css';

// function App() {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className={`app ${theme}`}>
//       <Header theme={theme} onToggleTheme={toggleTheme} />
//       <main className="main-content">
//         <section className="section">
//           <h2>计数器组件</h2>
//           <Counter />
//         </section>

//         <section className="section">
//           <h2>待办事项列表</h2>
//           <TodoList />
//         </section>

//         <section className="section">
//           <h2>用户卡片</h2>
//           <div className="user-cards">
//             <UserCard
//               name="张三"
//               email="zhangsan@example.com"
//               role="前端开发"
//             />
//             <UserCard
//               name="李四"
//               email="lisi@example.com"
//               role="后端开发"
//             />
//             <UserCard
//               name="王五"
//               email="wangwu@example.com"
//               role="全栈开发"
//             />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useReducer, useRef, useState } from "react";
import List from "./components/LIst";
import { useImmer, useImmerReducer } from "use-immer";
export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const reducer = (draft, action) => {
    const item = draft.find((item) => item.id === action.id);
    switch (action.type) {
      case "delete":
        return draft.filter((item) => item.id !== action.id);
      case "changeName":
        return (item.name = action.name);
      case "add":
        draft.push({ id: action.id, name: action.name });
        break;
    }
  };
  const [ListData, dispatch] = useImmerReducer(reducer, [
    { id: 1, name: "tom" },
    { id: 2, name: "tom1" },
    { id: 3, name: "tom2" },
    { id: 4, name: "tom3" },
    { id: 5, name: "tom4" },
    { id: 6, name: "tom5" },
    { id: 7, name: "tom6" },
    { id: 8, name: "tom7" },
    { id: 9, name: "tom8" },
    { id: 10, name: "tom9" },
  ]);
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.error("Error:", error));

    setTimeout(() => {
      setCnt(cnt + 1);
    }, 1000);
  }, []);
  const myRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {cnt}
      <input
        type="input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "add", id: ListData.length + 1, name: inputValue });
          setInputValue("");
        }}
      >
        添加
      </button>
      <List ref={myRef} ListData={ListData} dispatch={dispatch} />
      <div>
        <button onClick={() => console.log("DOM元素:", myRef.current?.dom)}>
          获取DOM
        </button>
        <button
          onClick={() =>
            console.log("项目数量:", myRef.current?.getItemCount())
          }
        >
          获取数量
        </button>
        <button
          onClick={() =>
            console.log("第一个项目:", myRef.current?.getItemById(1))
          }
        >
          获取ID为1的项目
        </button>
        <button onClick={() => myRef.current?.scrollToTop()}>滚动到顶部</button>
        <button
          onClick={() =>
            console.log("属性:", {
              itemCount: myRef.current?.itemCount,
              isEmpty: myRef.current?.isEmpty,
            })
          }
        >
          获取属性
        </button>
      </div>
    </div>
  );
};
export default App;
