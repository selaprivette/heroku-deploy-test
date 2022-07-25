import React, { useState } from 'react';
import Nav from './Nav';
// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);
  const [page, setPage] = useState('home');

  // If we are loggedIn render one set of elements, and if not we render another
  if (page === 'home') {
    return (
      <>
        <Nav setPage={setPage} />
        <h1>Home</h1>
      </>
    );
  }
  if (page === 'about') {
    return (
      <>
        <Nav setPage={setPage} />
        <h1>About</h1>
      </>
    );
  }
  if (page === 'contact') {
    return (
      <>
        <Nav setPage={setPage}/>
        <h1>Contact</h1>
      </>
    );
  }
  if (page === 'resume') {
    return (
      <>
        <Nav setPage={setPage}/>
        <h1>Resume</h1>
      </>
    );
  }
}