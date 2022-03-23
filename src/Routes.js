import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./Components/AddTodo/AddTodo";
import EditTodo from "./Components/EditTodo/EditTodo";
import Home from "./Components/Home/Home";
import TodoList from "./Components/TodoList/TodoList";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddTodo />} />
        <Route exact path="/list" element={<TodoList />} />
        <Route exact path="/edit" element={<EditTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
