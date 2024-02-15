import React from 'react';
import'./Education.css';

function Education(){
  return(
    <div className="journey">
      {/* <h2>EDUCATTION</h2> */}
      
    <div className="card">
        <img src="Wsu2.png" height={"100"}/>
        <div className="card__content">
          <p className="card__title">Walter Sisulu</p>
          {/* <p classNameName="card__title">Walter Sisulu</p> */}
          <p> Year Enrolled: 2013/01</p>
          <p> Year Completed: 2016/12</p>
          <p> Course: N.Diploma in Business Analysis</p>
          </div>
      </div>

      <div className="card">
        <img src="cput.png" height={"100"}/>
        <div className="card__content">
          <p className="card__title">Cape Peninsula</p>
          {/* <p classNameName="card__title">Cape Peninsula</p> */}
          <p> Year Enrolled: 2019/01</p>
          <p> year Completed: 2019/12</p>
          <p> Course: B-Tech Information and Technology Management </p>
          </div>
      </div>
    </div>
  )
}
export default Education


// <div classNameName="card__content">
// <p classNameName="card__title">Walter Sisulu</p>
// <p> Enrolled: 2013/01</p>
// <p> Completed: 2016/12</p>
// <p> Course: N.Diploma in Business Analysis</p>
// </div>