import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  card: {
    background:'red',
    color:'white',
    margin:20,
  },
  heading: {
    background: 'red',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '3.2rem',
    color: 'white',
    padding: '0 15px',
  },
};
function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.card} className="header">
      <h1 style={styles.heading}>Welcome</h1>
    </header>
  );
}

export default Header;
