export const addTodoAction = (data) => {
  return {
    type: "addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "searchFilterChange",
    payload: text,
  };
};

export const searchStatusChange = (value) => {
  return {
    type: "searchStatusChange",
    payload: value,
  };
};

export const changeComplete = (id) => {
  return {
    type: "changeComplete",
    payload: id,
  };
};
