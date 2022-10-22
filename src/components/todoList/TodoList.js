import React, { useState } from "react";
import styles from "./todoList.module.css";
import Checkbox from "../checkbox";

const TodoList = () => {
  // set initial state
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false
  });

  const [todos, setTodos] = useState([]);

  function addTodos(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false
      }
    ]);

    // reset the task
    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false
    });
  }

  const handleToggle = (id) => {
    // sieving through the todos and returning the ones that are completed
    let mapped = todos.map((task) => {
      return task.id === Number(id)
        ? { ...task, isCompleted: !task.isCompleted }
        : { ...task };
    });
    // setting our new todo list with updated variables
    setTodos(mapped);
  };

  return (
    <div>
      <form onSubmit={addTodos} className={styles.todoForm}>
        <label className={styles.label}>Task</label>
        <input
          type="text"
          value={task.taskDescription}
          name="taskDescription"
          className={styles.input}
          onChange={(event) =>
            setTask({
              taskDescription: event.target.value,
              isCompleted: false
            })
          }
        />
        <button className={styles.addTodoButton}>
          <h1>+</h1>
        </button>
      </form>
      <section>
        {todos.length > 0 ? (
          <>
            {todos.map((t, index) => {
              return (
                <div id={t.id} key={index + t.id}>
                  <Checkbox
                    label={t.taskDescription}
                    value={t.id}
                    checked={t.isCompleted}
                    onChange={() => handleToggle(t.id)}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <p>No tasks for today</p>
        )}
      </section>
    </div>
  );
};

export default TodoList;
