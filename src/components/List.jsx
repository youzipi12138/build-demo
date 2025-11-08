import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { ThemeContext } from "../App";

const List = forwardRef(({ ListData, dispatch }, ref) => {
  // 内部 ref 用于保存 DOM 元素
  const domRef = useRef(null);

  // 使用 useImperativeHandle 暴露 DOM 和方法/属性
  useImperativeHandle(ref, () => ({
    // 暴露 DOM 元素
    dom: domRef.current,
    // 暴露自定义方法
    getItemCount: () => {
      return ListData.length;
    },
    getItemById: (id) => {
      return ListData.find((item) => item.id === id);
    },
    scrollToTop: () => {
      if (domRef.current) {
        domRef.current.scrollTop = 0;
      }
    },
    // 暴露自定义属性
    itemCount: ListData.length,
    isEmpty: ListData.length === 0,
  }));

  const { theme } = useContext(ThemeContext);

  return (
    <div ref={domRef}>
      {ListData.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => dispatch({ type: "delete", id: item.id })}>
            删除
          </button>
          <button>修改name</button>
        </div>
      ))}
      <div>{theme}</div>
    </div>
  );
});

export default List;
