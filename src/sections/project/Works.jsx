import React,{Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Works extends Component{
    render(){
        return (
            <div class="py-5 border-bottom" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature  bg-gradient w-10 h-10 text-white rounded-3 mb-3" style={{backgroundColor:'rgb(12, 51, 30)'}}><i class="fa fa-car" aria-hidden="true"></i></div>
                        <h2 class="h4 fw-bolder">Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a class="text-decoration-none " style={{color:'rgb(12, 51, 30)'}} href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-gradient w-10 h-10 text-white rounded-3 mb-3" style={{backgroundColor:'rgb(12, 51, 30)'}}>
                            <i class="fa fa-money" aria-hidden="true"></i></div>
                        <h2 class="h4 fw-bolder">Featured title</h2>
                        <p class="text-black">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a class="text-decoration-none " style={{color:'rgb(12, 51, 30)'}} href="#!">
                            Call to action
                            <i class="bi bi-arrow-right mt-4"></i>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature  bg-gradient w-10 h-10 text-white rounded-3 mb-3" style={{backgroundColor:'rgb(12, 51, 30)'}}><i class="fa fa-cog" aria-hidden="true"></i></div>
                        <h2 class="h4 fw-bolder">Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a class="text-decoration-none" style={{color:'rgb(12, 51, 30)'}} href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Works;