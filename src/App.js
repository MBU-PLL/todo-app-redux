import logo from "./logo.svg";
import "./App.css";
import Filter from "./components/Filters";
import "antd/dist/antd.css";
import TodoList from "./components/TodoList";
import { Typography, Divider } from "antd";

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title className="title">TODO APP with REDUX</Title>
      <Filter />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
