import React from 'react';
import { Card } from 'react-bootstrap';
import dividendAlertApiService from "../services/dividendAlertApiService"

class Dividends extends React.Component {
  

  constructor(props) {
    super(props);
    
    this.state = {
        isFetching: false,
        dividends: []
    };
  }

  componentDidMount() {
      this.fetchDividends();
      this.timer = setInterval(() => this.fetchDividends(), 15000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }


  fetchDividends() {
    this.setState({...this.state, isFetching: true});
        
    dividendAlertApiService.get(process.env.REACT_APP_DIVIDENDALERT_NEXT_DIVIDENDS_ENPOINT)
      .then(result => {
        this.setState({ dividends: result.data })
      })
      .catch(console.log)

    this.setState({...this.state, isFetching: false});    
   }


  render () {

    if (this.state.isFetching) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    else {
      return (
        <div>
          
          <h2 className="my-2">Your Next Dividends</h2>

          {this.state.dividends.map((dividend) => (            
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
  }
}

export default Dividends;