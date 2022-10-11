import React, { useState, useEffect } from 'react';
import Form from './Form';
import Card from './Card';

function App() {

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // validation goes here
    setFormSubmitted(true);
  }

  const handleCardholderNameChange = (event) => {
    setCardholderName(event.target.value);
  }

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  }

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const handleCVCChange = (event) => {
    setCVC(event.target.value);
  }

  useEffect(() => {
    if (formSubmitted) {
      setCardholderName("");
      setCardNumber("");
      setMonth("");
      setYear("");
      setCVC("");
      setFormSubmitted(false);
    }
  })

  return (
    <div>
      <div className="border"></div>
      <Card cardholderName={cardholderName} cardNumber={cardNumber} month={month} year={year} cvc={cvc} />
      <Form cardholderName={cardholderName} setCardholderName={setCardholderName} handleCardholderNameChange={handleCardholderNameChange} cardNumber={cardNumber} setCardNumber={setCardNumber} handleCardNumberChange={handleCardNumberChange} month={month} setMonth={setMonth} handleMonthChange={handleMonthChange} year={year} setYear={setYear} handleYearChange={handleYearChange} cvc={cvc} setCVC={setCVC} handleCVCChange={handleCVCChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;