import React, { Suspense, lazy } from "react";
import "./Header.css";

// 动态导入 cp 组件
const Cp = lazy(() => import("./cp"));

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">React + Webpack 打包练习</h1>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === "light" ? "🌙" : "☀️"} 切换主题
        </button>
      </div>
      <Suspense fallback={<div>加载中...</div>}>
        <Cp />
      </Suspense>
    </header>
  );
}

export default Header;
