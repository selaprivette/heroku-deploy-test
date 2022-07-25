import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  card: {
    background:'green',
    color: 'white',
    margin:20,
  },
  heading: {
    background: 'green',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding:'0, 20px',
  },
};
function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.card} className="navbar">
      <a href="/"style={styles.heading}>Welcome</a>
    </nav>
  );
}

export default Navbar;
