import React from 'react';

export default function Resume(){
  return(
    <section id='resume' className='card'>
      <div className='row education'>

        <div className='three columns header-col'>
          <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">

          <div className='row item'>

            <div className='twelve columns'>
              <h3>Code Fellows</h3>
              <p className='info'> Certificate in Advance Full Stack JavaScript Development
                <span> &bull;</span> <em className='date'>October 2020</em>
              </p>
            </div>
            </div>
            <div className='row item'>
            <div className='twelve columns'>
              <h3>Crevier's Academy of Cosmetology Arts</h3>
              <p className='info'> Esthetician License 
                <span> &bull;</span> <em className='date'>March 2020</em>
              </p>
            </div>
            </div>
            <div className='row item'>
            <div className='twelve columns'>
              <h3>Flathead Valley Community College</h3>
              <p className='info'> Associate Degree in Computer Science 
                <span> &bull;</span> <em className='date'>May 2019</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row work'>

        <div className='three columns header-col'>
          <h1><span>Work</span></h1>
        </div>

        <div className='nine columns main-col'>

          <div className='row item'>
            <div className='twelve columns'>
              <h3>Glacier Meadows</h3>
              <p className='info'>
                Associate Web Developer
                <span> &bull;</span> <em className='date'>July 2020 - Present</em>
              </p>
            </div>
          </div>
          <div className='row item'>
            <div className='twelve columns'>
              <h3>Chi Cafe</h3>
              <p className='info'>
                Manager, Barista, Line Cook, Cashier
                <span> &bull;</span> <em className='date'>September 2019</em>
              </p>
            </div>
          </div>
          <div className='row item'>
            <div className='twelve columns'>
              <h3>Piggyback BBQ</h3>
              <p className='info'>
                Server
                <span> &bull;</span> <em className='date'>October 2018</em>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='row skill'>

        <div className='three columns header-col'>
          <h1><span>Skills</span></h1>
        </div>

        <div className='nine columns main-col'>

          
        </div>
      </div>
    </section>
  )
}