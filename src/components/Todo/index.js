import { Row, Checkbox, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeComplete } from "../../redux/actions";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority, completed }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);
  const toggleChecbox = () => {
    setChecked(!checked);
    dispatch(changeComplete(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        marginTop: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleChecbox} value={completed}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
    </Row>
  );
}
