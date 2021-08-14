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
                        <h2 class="h4 fw-bolder">Green vehicle system installation</h2>
                        <p>Taking your part contributing to vehicle emission reduction, we offer you a green vehicle system and get installed with comfort in your vehicle with trusted experts in the field</p>
                        <a class="text-decoration-none " style={{color:'rgb(12, 51, 30)'}} href="#!">
                            Call to action
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-gradient w-10 h-10 text-white rounded-3 mb-3" style={{backgroundColor:'rgb(12, 51, 30)'}}>
                            <i class="fa fa-money" aria-hidden="true"></i></div>
                        <h2 class="h4 fw-bolder">Vehicle pollution related problems inspection and repair</h2>
                        <p class="text-black">You are warned for over polluting!!! We offer you a vehicle inspection services together with vehicle repair with our trusted experts in the industry of outomobile </p>
                        <a class="text-decoration-none " style={{color:'rgb(12, 51, 30)'}} href="#!">
                            Call to action
                            <i class="bi bi-arrow-right mt-4"></i>
                        </a>
                    </div>
                    <div class="col-lg-4">
                        <div class="feature  bg-gradient w-10 h-10 text-white rounded-3 mb-3" style={{backgroundColor:'rgb(12, 51, 30)'}}><i class="fa fa-cog" aria-hidden="true"></i></div>
                        <h2 class="h4 fw-bolder">Adaptive egg incubator ordering</h2>
                        <p>As technological and innovation-oriented partner, automatic egg incubators are available in all sizes from 60 egg to above with affordable price. Buy yours today and scale up your business with us.</p>
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