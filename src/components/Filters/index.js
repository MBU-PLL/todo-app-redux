import { Input, Row, Col, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilterChange, searchStatusChange } from "../../redux/actions";

const { Search } = Input;
export default function Filter() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const hanldeChangeSearchText = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const [status, setStatus] = useState("All");
  const hanldeChangeStatus = (e) => {
    setStatus(e.target.value);
    dispatch(searchStatusChange(e.target.value));
  };
  return (
    <Row>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={hanldeChangeSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue={status} onChange={hanldeChangeStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">Todo</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          placeholder="Please select"
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
