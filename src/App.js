import React from 'react';
import coronaImage from './Images/image.png'
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './App.module.css';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    // fetch the data
    const fetchedData = await fetchData(country);

    // set the state
    this.setState({data: fetchedData , country: country});
  }


  render() {
    const {data , country} = this.state;
    return (  
      <div className={styles.container}>
        <img src={coronaImage} className={styles.covidImage} alt="Covi-19 Image"/>
        <Cards props={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;