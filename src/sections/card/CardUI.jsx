import React from 'react';
import service from '../../images/service.jpg'
import './card-style.css';

const Card=props=>{
  return (
      <div className="card text-center">
         <div className="overflow">
            <img src={service} alt="" className="card-image-top"/>
         </div>
         <div className="card-body text-dark">
           <h4 className="card-title" style={{color:'rgb(12, 51, 30)'}}>Card Title</h4>
           <p className="card-text text-secondary">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sequi possimus, eaque aut vero reprehenderit perferendis inventore, ex beatae quae quidem.
           </p>
           <a href="/#" className="btn btn-outline-success">
              Go Anywhere
           </a>
         </div>
      </div>
  );
}
export default Card;