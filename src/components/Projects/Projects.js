import React from 'react';
import'./Projects.css'

function Contact(){
    return(
        // <section id="projects">
<div class="container">
    <h1 class="text-center">Projects</h1>
    <div class="row">
        <div class="col-lg-4 mt-4">
            <div class="card servicesText">
                <div class="card-body">
                    <i class="fas servicesIcon fa-clock"></i>
                    <h4 class="card-title mt-3">Hire A Tutor</h4>
                    <p class="card-text mt-3">
                    Website Link and picture
                    </p>
                  
                </div>
            </div>  
        </div>
        <div class="col-lg-4 mt-4">
            <div class="card servicesText">
                <div class="card-body">
                    <i class='fas servicesIcon fa-layer-group'></i>
                    <h4 class="card-title mt-3">GadgetBorrow</h4>
                    <p class="card-text mt-3">
                    Website Link and a picture
                    </p>
                </div>
            </div>  
        </div>

        <div class="col-lg-4 mt-4">
            <div class="card servicesText">
                <div class="card-body">
                    <i class='far servicesIcon fa-check-circle'></i>
                    <h4 class="card-title mt-3">Calculator</h4>
                    <p class="card-text mt-3">
                    Website Link and a picture 
                    </p>
                </div>
            </div>  
        </div>
    </div>
</div>

    )
}
export default Projects
