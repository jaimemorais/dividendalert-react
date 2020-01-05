import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
    
    fetch(process.env.REACT_APP_DIVIDENDALERT_API_URL)
    .then(res => res.json())
    .then((data) => {
      this.setState({ dividends: data })
    })
    .catch(console.log)

    this.setState({...this.state, isFetching: false});
    
    // TODO error handling       
   }


  render () {
    
    return (
      <div>
        <p>Next Dividends</p>

        {this.state.dividends.map((dividend) => (
          
          <div>
            <Card>              
              <CardBody>
                <CardTitle>{dividend.stockName}</CardTitle>
                <CardSubtitle>{dividend.type}</CardSubtitle>
                <CardText>{dividend.value} - {dividend.paymentDate}</CardText>                
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Dividends;