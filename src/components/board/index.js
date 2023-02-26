import React, { useState, useRef, useEffect } from 'react'
import {
  BoardContainer,
  BoardTitle,
  BoardWrapper,
  BoardCategory,
  CategoryTitle,
  InputLine,
  AddButton,
  ContainerImage,
} from "./Board"

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Background from "../../images/background.jpg_large"
import DragDrop from '../DragDrop';
import { v4 as uuidv4 } from 'uuid';


function Board() {
  // Creating a reference to the input field.
  const taskNameRef = useRef()

  // Starting values of tasks.
  const [tasks, setTasks] = useState([
    { title: "Fix bugs", key: uuidv4(), status: "todo" },
    { title: "Write an email", key: uuidv4(), status: "todo" },
    { title: "Make breakfast", key: uuidv4(), status: "todo" },
    { title: "Study programing", key: uuidv4(), status: "inProgress" },
    { title: "Update the schedule", key: uuidv4(), status: "done" },
    { title: "Create website", key: uuidv4(), status: "done" }])

  // Adding new task.  
  function handleAdd() {
    const title = taskNameRef.current.value
    if (title === "") return
    const newTasks = [...tasks]
    newTasks.push({ title: title, key: uuidv4(), status: "todo" })
    setTasks([...newTasks])
    taskNameRef.current.value = null;
  }
  // Function to log current state
  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <>
      <BoardContainer>
        <ContainerImage src={Background} alt="grid" />
        <BoardTitle>Kanban board</BoardTitle>
        <InputLine ref={taskNameRef} type="text" placeholder="New task" />
        <AddButton onClick={handleAdd} >Add +</AddButton>
        <BoardWrapper>
          <BoardCategory>
            <CategoryTitle>To Do 📝</CategoryTitle>
            <DndProvider backend={HTML5Backend}>
              <DragDrop items={tasks} setItems={setTasks} status="todo" key={uuidv4()} />
            </DndProvider>
          </BoardCategory>
          <BoardCategory >
            <CategoryTitle>In Progress 🚧</CategoryTitle>
            <DndProvider backend={HTML5Backend}>
              <DragDrop items={tasks} setItems={setTasks} status="inProgress" key={uuidv4()} />
            </DndProvider>
          </BoardCategory>
          <BoardCategory>
            <CategoryTitle>Done ✅</CategoryTitle>
            <DndProvider backend={HTML5Backend}>
              <DragDrop items={tasks} setItems={setTasks} status="done" key={uuidv4()} />
            </DndProvider>
          </BoardCategory>
        </BoardWrapper>
      </BoardContainer>
    </>
  )
}

export default Board