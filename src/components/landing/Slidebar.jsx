import React from 'react'
import '../../styles/Layout.css'
export default function Slidebar() {
  return (
    <div>
    <input type="checkbox" id="check"/>
    <label htmlFor="check">
      <i  id='btn'>
        <img className='icons-slide' src='https://i.ibb.co/xmtskFj/menu-1.png'/>
        
      </i>
      <i id="cancel">
        <img className='icons-slide' src='https://i.ibb.co/kSXtKvL/cerrar.png'/>
       
      </i>
    </label>
    <div className="slidebar">
  <header>
  <h1 >AirportShuttlecr.com</h1>
  <ul>
    <li> <a href={"/"}>
      <div className='it-me'>
      Home 
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="40" color='white'><path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z"/></svg>
       </div></a> </li> 
   
    <li> <a href={"/contact"}>
      <div className='it-me'>
      Contact
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="40"><path d="M776 569q-5-121-89-205t-205-89v-60q72 2 135.5 30.5T729 322q48 48 76.5 111.5T836 569h-60Zm-169 0q-5-50-40-84.5T482 445v-60q75 5 127.5 57T667 569h-60Zm188 367q-122 0-242.5-60T336 720q-96-96-156-216.5T120 261q0-19.286 12.857-32.143T165 216h140q13.611 0 24.306 9.5Q340 235 343 251l27 126q2 14-.5 25.5T359 422L259 523q56 93 125.5 162T542 802l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840 740 840 756v135q0 19.286-12.857 32.143T795 936ZM229 468l81-82-23-110H180q0 39 12 85.5T229 468Zm369 363q41 19 89 31t93 14V769l-103-21-79 83ZM229 468Zm369 363Z"/></svg>
      </div>
      </a> </li>
    </ul>
  </header>
    </div>
  </div>
  )
}
