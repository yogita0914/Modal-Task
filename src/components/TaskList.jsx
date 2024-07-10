import React from 'react';
import styles from './TaskList.module.css';

const TaskList = ({ tasks }) => {
  return (
    <div className={styles.taskList}>
      {tasks.map((task, index) => (
        <div key={index} className={styles.taskItem}>
          {task}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
