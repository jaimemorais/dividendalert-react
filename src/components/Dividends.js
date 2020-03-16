import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import dividendAlertApiService from "../services/dividendAlertApiService"

export default function Dividends() {
  
  const [isFetching, setIsFetching] = useState(false);
  const [nextDividends, setNextDividends] = useState([]);

  useEffect(() => {
    fetchDividends();
    //this.timer = setInterval(() => this.fetchDividends(), 15000);
    
    // returned function will be called on component unmount     
    return () => {
      // clearInterval(this.timer);
      // this.timer = null;
    }
  });



  function fetchDividends() {
    setIsFetching(true);    
        
    dividendAlertApiService.get(process.env.REACT_APP_DIVIDENDALERT_ENDPOINT_NEXT_DIVIDENDS)
      .then(result => {
        setNextDividends(result.data)
      })
      .catch(console.log)

    setIsFetching(false);
  }


  return (  
    <div>      
      <h2 className="my-2">Your Next Dividends</h2>
      {nextDividends.map((dividend) => (            
        <div key={dividend.id}>
          <Card bg="info" text="white" style={{ width: '23rem' }} className="mx-auto my-1 text-left">              
            <Card.Header className="font-weight-bold">
              {dividend.stockName}
            </Card.Header>
            <Card.Body>                                    
                <Card.Text>
                  <span className="font-weight-bold">{dividend.type}</span> <br/>
                  Value : {dividend.value} <br/> 
                  Payment Date : {dividend.paymentDate}
                </Card.Text>                
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );

  
}
