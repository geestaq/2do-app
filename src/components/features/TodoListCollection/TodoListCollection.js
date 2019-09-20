import React from 'react'
import { Row, Col } from 'reactstrap';
import TodoList from '../TodoList/TodoList';

const TodoListCollection = ({ items }) => (
  <Row>
    {items.map((item, index) => (
      <Col key={item.id} lg="4">
        <TodoList
          title={item.title} />
      </Col>
    ))}
  </Row>
);

export default TodoListCollection;
