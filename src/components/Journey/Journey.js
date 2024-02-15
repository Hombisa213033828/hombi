import React from 'react';
import'./Journey.css';

function Journey(){
  return(
    <div className="journey">
      
    <div className="card">
        <img src="Wsu2.png" height={"50"}/>
        <div className="card__content">
          <p className="card__title">Walter Sisulu</p>
          <p classNameName="card__title">Walter Sisulu</p>
          <p> Enrolled: 2013/01</p>
          <p> Completed: 2016/12</p>
          <p> Course: N.Diploma in Business Analysis</p>
          </div>
      </div>

      <div className="card">
        <img src="cput.png" height={"80"}/>
        <div className="card__content">
          <p className="card__title">Cape Peninsula</p>
          <p classNameName="card__title">Walter Sisulu</p>
          <p> Enrolled: 2013/01</p>
          <p> Completed: 2016/12</p>
          <p> Course: N.Diploma in Business Analysis</p>
          </div>
      </div>
    </div>
  )
}
export default Journey


// <div classNameName="card__content">
// <p classNameName="card__title">Walter Sisulu</p>
// <p> Enrolled: 2013/01</p>
// <p> Completed: 2016/12</p>
// <p> Course: N.Diploma in Business Analysis</p>
// </div>