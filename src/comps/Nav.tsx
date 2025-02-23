import '../styles Files/Nav.css';
import React from 'react';
export default function Nav() {
  return (
    <nav>
      <h2 className='generalInfoNav areaActive'>General Info</h2>
      <h2 className='eduInfoNav'>Educational Info</h2>
      <h2 className='profInfoNav'>Professional Exp</h2>
    </nav>
  );
}
