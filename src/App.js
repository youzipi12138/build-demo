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

import React, { useState } from "react";
import List from "./components/List";
export const App = () => {
  const [ListData, setListData] = useState([
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
  const [inputValue, setInputValue] = useState("");

  const deleteHander = (id) => {
    setListData(
      ListData.filter((item) => {
        return item.id !== id;
      })
    );
  };
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
      <input
        type="input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setListData([
            ...ListData,
            { id: ListData.length + 1, name: inputValue },
          ]);
          setInputValue("");
        }}
      >
        添加
      </button>
      <List ListData={ListData} deleteHander={deleteHander} />
    </div>
  );
};
export default App;
