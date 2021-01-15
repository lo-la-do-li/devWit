import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
   const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const tabValue = event.target
    console.log(tabValue)
    setValue(tabValue);
  };

  return (
    <nav 
      className="nav-bar" 
      value={value} 
      onChange={handleChange} 
      >
      <Link to='/home'>
				<button >Home</button>
			</Link>
      <Link to='/get-material' >
				<button>Get Some New Material</button>
			</Link>
      <Link to='/my-set'>
				<button>My Set</button>
			</Link>
      <h1>DevWit</h1>
    </nav>
  );
}

export default NavBar;