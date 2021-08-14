import React , {Component} from 'react'
import service from '../../images/service.jpg'

class Cards extends Component
{
    render(){
        return(
            <div>
                <h1 style={{color:'rgb(12, 51, 30)'}}>our Works</h1>
            <div className="container-fluid d-flex justify-content-center -mt-20">
              <div className="row" style={{marginBottom:'35px'}}>
                 <div className="col-md-4">
                 <div className="card text-center">
         <div className="overflow">
            <img src={service} alt="" className="card-image-top"/>
         </div>
         <div className="card-body text-dark">
           <h4 className="card-title" style={{color:'rgb(12, 51, 30)'}}>Green vehicle system installation</h4>
           <p className="card-text text-secondary">
           It was designed to protect the environment against excessive harmful gases from vehicle emissions.This system to detect hydrocarbons (HC), carbon monoxide (CO) and nitrogen oxides (NOX) in the exhaust pipe. when vehicle exceeds set limit,the vehicle is warned
           </p>
           <a href="/#" className="btn btn-outline-success">
              Go Anywhere
           </a>
         </div>
      </div>
                 </div>
                 <div className="col-md-4">
                 <div className="card text-center">
         <div className="overflow">
            <img src={service} alt="" className="card-image-top"/>
         </div>
         <div className="card-body text-dark">
           <h4 className="card-title" style={{color:'rgb(12, 51, 30)'}}>IoT based soil monitoring system.</h4>
           <p className="card-text text-secondary">
           It was designed to boost agricultural productivity. The physical and chemical properties of soil like oxygen, humidity, NPC and PH are wirelessly monitored to control soil fertility, irrigation processes and prestige input for maximum productivity purpose.
           </p>
           <a href="/#" className="btn btn-outline-success">
              Go Anywhere
           </a>
         </div>
      </div>
                 </div>
                 <div className="col-md-4">
                 <div className="card text-center">
         <div className="overflow">
            <img src={service} alt="" className="card-image-top"/>
         </div>
         <div className="card-body text-dark">
           <h4 className="card-title" style={{color:'rgb(12, 51, 30)'}}>Adaptive egg incubator</h4>
           <p className="card-text text-secondary">
           Technology is now increasing since it is no longer necessary to have many chicken hens to get productivity from poultry farming. With a help of automatic egg incubator, you put your eggs into the machine and be patient until 28 days to get a maximum of 97% hatchability rate using incubator machines.
           </p>
           <a href="/#" className="btn btn-outline-success">
              Go Anywhere
           </a>
         </div>
      </div>
                 </div>
              </div>
            </div>
            </div>
        )
    }
}

export default Cards;