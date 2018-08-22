import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state={aks : "./pics/1.jpg"}
    this.state={
      aks: require('./cover.png'),
      js: require('./cover.json')
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit() {
      let that=this;
      let aks2=this.state.aks;
      let js2=this.state.js;
      fetch('/new', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(async function (response) {
          aks2 = await require('./english_data/'+response.address+'.jpg');
          js2 = await require('./english_data/'+response.address+'.json');
          if(that.state.aks!==aks2)
          that.setState({
            aks: aks2,
            js: js2
          });
        })
        .catch(function (error) {
          // this.handleSubmit();
          alert("there is a problem with server!");
        });
    }
    componentDidMount(){
      // alert("123");
      // this.handleSubmit();
    }

  render() {
    return (
      <div  onClick={this.handleSubmit}>
        <div className="img_container">
          <img src={this.state.aks} alt="123" />
          <div><p> {this.state.js.edge_media_to_caption.edges[0].node.text} </p></div>
        </div>
      </div>
    );
  }
}

export default App;
