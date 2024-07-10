import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.jpg'; 

const Navbar = ({ openModal }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
      <button className={styles.modalButton} onClick={openModal}>
        Open Modal
      </button>
    </nav>
  );
};

export default Navbar;
