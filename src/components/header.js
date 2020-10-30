import React from 'react';

export default function Header(){
  return(
    <>
    <header>
      <nav id='nav-bar'>
        <ul id='nav' className='nav'>

        
     <li><a className="smoothscroll" href="#aboutme">About Me </a></li>
     <li><a className="smoothscroll" href="#resume">Resume </a></li>
     <li><a className="smoothscroll" href="#projects">Projects </a></li>
     <li><a className="smoothscroll" href="#contact">Contact</a></li>
      </ul>
      </nav>

    <div className ='row banner'>
      <div className="banner-text">
        <h1 className="responsive-headline">
          Hello, I am Daisy Johnson.
        </h1>
        
        <h3>
          I am a Full-Stack Developer. I love working on personal projects, learning new technologies, and making music.
        </h3>
        <hr/>
      </div>
      </div>
    </header>
    </>
  )
}