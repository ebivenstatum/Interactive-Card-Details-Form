import React, { useState, useEffect } from 'react';

function Form(cardholderName, setCardholderName, handleCardholderNameChange, cardNumber, setCardNumber, handleCardNumberChange, month, setMonth, handleMonthChange, year, setYear, handleYearChange, cvc, setCVC, handleCVCChange, handleSubmit) {

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <label>
          CARDHOLDER NAME /n
          <input type="text" className="fullInput" name="cardholderName" value={cardholderName} onChange={handleCardholderNameChange}></input>
        </label>
        <label>
          CARD NUMBER /n
          <input type="text" className="fullInput" name="cardNumber" maxLength={16} value={cardNumber} onChange={handleCardNumberChange}></input>
        </label>
        <label>
          EXP. DATE (MM/YY) /n
          <input type="text" className="quarterInput" name="month" maxLength={2} value={month} onChange={handleMonthChange}></input>
          <input type="text" className="quarterInput" name="year" maxLength={2} value={year} onChange={handleYearChange}></input>
        </label>
        <label>
          CVC /n
          <input type="text" className="halfInput" name="cvc" maxLength={3} value={cvc} onChange={handleCVCChange}></input>
        </label>
        <input type="submit" className="fullInput" name="comfirm" value="Confirm"></input>
      </form>
    </div>
  );
}

export default Form;