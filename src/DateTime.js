import React, { useState, useEffect } from 'react';

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1>{currentDateTime.toLocaleDateString()}</h1>
      <h2>{currentDateTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default DateTime;