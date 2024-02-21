import React from 'react';
import './Education.css';
import SalesPic from './images/sales-logo.png';
import Btech from "./Academics/B-tech certificate.pdf";
// import BA from "./Saleforce/BusinessAnalyst.pdf";

export default function Education() {
  const openBtechCertificate = () => {
    window.open(Btech, '_blank');
    window.open(BA, '_blank');

  };

  return (
    <div className="experience">
      <div className='top-content'>
        <h3 id='education-title'>Education</h3>
        <div className='top-cards'>
          {/* Your education cards */}
        </div>
      </div>

      <div className='bottom-content'>
        <h3>Certificates</h3>
        <div className='certificates'>
          {/* Your other certificate cards */}

          {/* B-Tech Certificate Card */}
          <div className='academics'>
            <div className="cert-card">
              <div className="card-img">
                <img src={SalesPic} alt='Sales force picture' id='sale-pic' />
              </div>
              <div className="card-info">
                <p className="text-title">B-Tech Certificate</p>
                <p className="text-body">Diploma, B-Tech</p>
              </div>
              <div className="card-footer">
                <div className="card-button">
                  <button onClick={openBtechCertificate}>View Certificate</button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='Salesforce'>
            <div className="cert-card">
              <div className="card-img">
                <img src={SalesPic} alt='Sales force picture' id='sale-pic' />
              </div>
              <div className="card-info">
                <p className="text-title">Salesforce</p>
                <p className="text-body">Business Analyst</p>
                {/* <p className="text-body">Service Cloud</p> */}
              {/* </div>
              <div className="card-footer">
                <div className="card-button">
                  <button onClick={openBusinessAnalyst}>View Certificate</button>
                </div>
              </div>
            </div>
          </div>   */} 
          

          {/* <div className='Mulesoft'>
            <div className="cert-card">
              <div className="card-img">
                <img src={SalesPic} alt='Sales force picture' id='sale-pic' />
              </div>
              <div className="card-info">
                <p className="text-title">Mulesoft</p>
                <p className="text-body">Business Analyst</p>
                {/* <p className="text-body">Service Cloud</p> */}
              {/* </div>
              <div className="card-footer">
                <div className="card-button">
                  <button onClick={openBusinessAnalyst}>View Certificate</button>
                </div>
              </div>
            </div>
          </div>   */}
           
       </div>
      </div>
    </div>
   
  );
}
