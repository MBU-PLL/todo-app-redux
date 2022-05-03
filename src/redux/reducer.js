import { v4 as uuidv4 } from "uuid";

const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: uuidv4(), name: "Learn React", completed: false, priority: "High" },
    {
      id: uuidv4(),
      name: "Learn JavaScript",
      completed: false,
      priority: "Medium",
    },
    { id: uuidv4(), name: "Learn C#", completed: true, priority: "Low" },
  ],
};
const rootReducer = (state = initState, action) => {
  //console.log({ state, action });
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case "searchStatusChange":
      return {
        ...state,
        // Overwrite the filters value
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    case "changeComplete":
      console.log({ state, action });
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old todos array
        todoList: state.todoList.map((todo) => {
          // If this isn't the todo item we're looking for, leave it alone
          if (todo.id !== action.payload) {
            return todo;
          }
          // We've found the todo that has to change. Return a copy:
          else {
            // bỏ else thì nó vẫn hiểu phần return phía trong là else của if trước đó
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
        }),
      };

    default:
      return state;
  }
};
export default rootReducer;
