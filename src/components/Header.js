import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <>
      <div className="center">
        <div className="header-section">
          <h1>Overreacted</h1>
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605_1280.jpg"
              alt=""
            />
            <span>
              <p>Personal blog by <a href="/home">Oliver maiyo</a></p>
              <p>I explain with words and code.</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header