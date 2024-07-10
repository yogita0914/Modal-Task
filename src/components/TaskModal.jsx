import React, { useState } from 'react';
import styles from './TaskModal.module.css';

const TaskModal = ({ closeModal, addTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      addTask(task);
      setTask('');
      closeModal();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={closeModal}>×</span>
        <h2>Add a new task</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className={styles.taskInput}
        />
        <button onClick={handleAddTask} className={styles.addButton}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskModal;
