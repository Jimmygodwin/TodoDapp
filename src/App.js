import './App.css';
import Web3 from 'web3';
import { Component } from 'react';
import Navbar from './component/navbar';


class App extends Component{

  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    console.log("account", accounts[0])
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>A simple To Do Decentralized Application on Etheruem network</h2>
          <p>Your account: {this.state.account} </p>
        </div>
        
  
      </div>
    );
  }
  
}

export default App;
