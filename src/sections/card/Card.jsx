import React , {Component} from 'react'
import Card from './CardUI';

class Cards extends Component
{
    render(){
        return(
            <div>
                <h1 style={{color:'rgb(12, 51, 30)'}}>our Works</h1>
            <div className="container-fluid d-flex justify-content-center -mt-20">
              <div className="row" style={{marginBottom:'35px'}}>
                 <div className="col-md-4">
                     <Card/>
                 </div>
                 <div className="col-md-4">
                     <Card/>
                 </div>
                 <div className="col-md-4">
                     <Card/>
                 </div>
              </div>
            </div>
            </div>
        )
    }
}

export default Cards;