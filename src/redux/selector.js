import { createSelector } from "@reduxjs/toolkit";
export const todoListSelectorNotSearch = (state) => state.todoList;
export const searchText = (state) => state.filters.search;
export const searchStatus = (state) => state.filters.status;

export const todoListSelector = (state) => {
  const todosRemaining = state.todoList.filter((todo) => {
    return todo.name.includes(state.filters.search);
  });
  return todosRemaining;
};

// kết hợp 2 hoặc nhiều selector để tạo thành 1 selector mới
export const todoListAndSearchText = createSelector(
  todoListSelectorNotSearch,
  searchStatus,
  searchText,
  (todoList, searchStatus, searchText) => {
    return todoList.filter((todo) => {
      if (searchStatus === "All") {
        return todo.name.includes(searchText);
      } else {
        return (
          todo.name.includes(searchText) &&
          (searchStatus === "Completed" ? todo.completed : !todo.completed)
        );
      }
    });
  }
);

/* export const todoListSelector = (state) => {
  const todos = state.todoList.map((todo) => {
    console.log(todo);
    if (todo.name.includes(state.filters.search)) return todo;
  });
  return todos;
}; */
