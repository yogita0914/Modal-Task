import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      {isModalOpen && <TaskModal closeModal={closeModal} addTask={addTask} />}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
