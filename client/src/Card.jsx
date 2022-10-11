import React, { useState, useEffect } from 'react';

function Card(cardholderName, cardNumber, month, year, cvc) {
  return (
    <div className="card">

      <div className="cardFront">
        <img src="../images/bg-card-front.png" />
        <div className="circleOne"></div>
        <div className="circleTwo"></div>

        <p className="cardNumber"></p>
        <p className="cardholderName"></p>
        <p className="date"></p>
      </div>

      <div className="cardBack">
        <img src="../images/bg-card-back.png" />
        <p className="cvc"></p>
      </div>

    </div>
  )
}

export default Card;