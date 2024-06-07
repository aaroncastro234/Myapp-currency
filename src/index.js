import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DateTime from './DateTime';

function MyForm() {
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);
  const [aud, setAud] = useState(0);
  const [gbp, setGbp] = useState(0);

  const fetchRates = async (usdAmount) => {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const rates = data.rates;
    
    setEur((usdAmount * rates.EUR).toFixed(2));
    setAud((usdAmount * rates.AUD).toFixed(2));
    setGbp((usdAmount * rates.GBP).toFixed(2));
    
  };

  const handleUsdChange = (event) => {
    const usdAmount = event.target.value;
    setUsd(usdAmount);
    fetchRates(usdAmount);
  };


return(
     <form>
      <label>Enter your USD Amount here:
        <img src="/betsyflag.jpg" alt="Betsy Ross Flag" style={{width: '30px', marginLeft: '10px'}} />
        <input type="number" value={usd} onChange={handleUsdChange} />
      </label>
      <br />
      <label>EUR:
        <img src="/poundphoto.jpg" alt="Great Britain Pound" style={{width: '30px', marginLeft: '10px'}} />
        <input type="number" value={eur} readOnly />
      </label>
      <br />
      <label>AUD:
        <img src="/AUDsymbol.jpeg" alt="Australian Dollar" style={{width: '30px', marginLeft: '10px' }} />
        <input type="number" value={aud} readOnly />
      </label>
      <br />
      <label>GBP:
      <img src="/poundphoto.jpg" alt="Great Britain Pound" style={{width: '30px', marginLeft: '10px'}} />
        <input type="number" value={gbp} readOnly />
      </label>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);



