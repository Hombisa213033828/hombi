import React from 'react';
import'./Education.css';

function Portfolio(){
    return(
        <div class="container mt-3">
        <h1 class="text-center">Portfolio</h1>
        <div class="row">
            <div class="col-lg-4 mt-4">
                <div class="card">
                    <img class="card-img-top" src="images/ci.jpg" alt="Card image" style="width:100%" />
                    <div class="card-body">
                        <div class="text-center">
                            <a href="#" class="btn btn-success">Creative Tutors - Website (creativetutorials.netlify.app)https://creativetutorials.netlify.app/</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mt-4">
                <div class="card portfolioContent">
                    <img class="card-img-top" src="images/gb.jpg" alt="Card image" style="width:100%"/>
                        <div class="text-center">
                            <a href="#" class="btn btn-success">
                                https://gadget-borrow-website.netlify.app/</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 mt-4">
                <div class="card portfolioContent">
                    <img class="card-img-top" src="images/portfolioImage3.jpg" alt="Card image" style="width:100%" />
                    <div class="card-body">
                        <div class="text-center">
                            <a href="#" class="btn btn-success">https://hombisa.netlify.app</a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
   

    )
}

