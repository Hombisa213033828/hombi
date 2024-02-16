import React from 'react';
import'./Education.css';
import SalesPic from './images/sales-logo.png';


function Education(){
  return(
    <div className="experience">
      <div className='top-content'>
      <h3>Education</h3>
        <div className='top-cards'>
           <div className='card-1'>
           
           <div className="card">
        <img src="Wsu2.png" height={"100"}/>
        <div className="card__content">
          <p className="card__title">Walter Sisulu</p>
          <p> Year Completed: 2013/01</p>
          <p> year Completed: 2016/12</p>
          <p> Course: N.Diploma in Business Analysis</p>
          </div>
         </div>
           
            </div>
           <div className='card-2'>
           
           <div className="card">
        <img src="cput.png" height={"100"}/>
        <div className="card__content">
          <p className="card__title">Cape Peninsula</p>
       
          <p> Year Enrolled: 2019/01</p>
          <p> year Completed: 2019/12</p>
          <p> Course: B-Tech Information and Technology Management </p>
          </div>
        </div> 
           
           </div>
        </div>
      </div>

      <div className='bottom-content'>
        <h3>Certificates</h3>
          <div className='certificates'>
            <div className='sales'>

            <div class="cert-card">
                <div class="card-img">
                  <img src={SalesPic} alt='Sales force picture' id='sale-pic' />
                </div>
                <div class="card-info">
                <p class="text-title">Sales Force </p>
                <p class="text-body">Product description and details</p>
                </div>
                <div class="card-footer">
                
                <div class="card-button">
                  <button>View Certificates</button>
                 </div>
                </div>
            </div>

            </div>
            <div className='Mulesoft'>

            <div class="cert-card">
                <div class="card-img">
                  <img src={SalesPic} alt='Sales force picture' id='sale-pic' />
                </div>
                <div class="card-info">
                <p class="text-title">Sales Force </p>
                <p class="text-body">Product description and details</p>
                </div>
                <div class="card-footer">
                
                <div class="card-button">
                  <button>View Certificates</button>
                 </div>
                </div>
            </div>

            </div>
            <div className='academics'>

            <div class="cert-card">
                <div class="card-img">
                  <img src={SalesPic} alt='Sales force picture' id='sale-pic' />
                </div>
                <div class="card-info">
                <p class="text-title">Sales Force </p>
                <p class="text-body">Product description and details</p>
                </div>
                <div class="card-footer">
                
                <div class="card-button">
                  <button>View Certificates</button>
                 </div>
                </div>
            </div>
            
            </div>
          </div>
      </div>
    </div>
  )
}
export default Education;


