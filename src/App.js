import React, { useState } from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import UserCard from './components/UserCard';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="main-content">
        <section className="section">
          <h2>计数器组件</h2>
          <Counter />
        </section>
        
        <section className="section">
          <h2>待办事项列表</h2>
          <TodoList />
        </section>
        
        <section className="section">
          <h2>用户卡片</h2>
          <div className="user-cards">
            <UserCard 
              name="张三" 
              email="zhangsan@example.com" 
              role="前端开发"
            />
            <UserCard 
              name="李四" 
              email="lisi@example.com" 
              role="后端开发"
            />
            <UserCard 
              name="王五" 
              email="wangwu@example.com" 
              role="全栈开发"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

