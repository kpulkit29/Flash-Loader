import React, { Component } from 'react';
import FlashLoader from "../lib/index.js";
import "./App.css";
//import FlashLoader from "flash-loader";
class App extends Component {
  constructor() {
    super()
    this.state= {
      hideFlash:true,
      hideRotate:true,
      hideJump:true
    }
  }

  showLoader = (type) =>{
    switch(type) {
      case "runbarry":
        this.setState({
          hideFlash:false,
        },()=>{
          setTimeout(()=>{
            this.setState({
              hideFlash:true,
            })
          },3000)
        })
        return;
      case "rotate":
        this.setState({
          hideRotate:false,
        },()=>{
          setTimeout(()=>{
            this.setState({
              hideRotate:true,
            })
          },3000)
        })
        return;
      case "jump":
        this.setState({
          hideJump:false,
        },()=>{
          setTimeout(()=>{
            this.setState({
              hideJump:true,
            })
          },3000)
        })
        return;
    }
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="loaders">
            <div>
              {
                this.state.hideFlash ? "Run Barry Run" : <FlashLoader open={!this.state.hideFlash} type="runbarry"/> 
              }
              <br/>
              <button className="load-button" onClick={()=>this.showLoader("runbarry")}>Load</button>
            </div>
            <div>
              {
                this.state.hideJump ? "Jump flash" : <FlashLoader open={!this.state.hideJump} type="jump"/> 
              }
              <br/>
              <button className="load-button" onClick={()=>this.showLoader("jump")}>Load</button>
            </div>
            <div>
              {
                this.state.hideRotate ? "Rotate Punch" : <FlashLoader open={!this.state.hideRotate} type="rotate"/> 
              }
              <br/>
              <button className="load-button" onClick={()=>this.showLoader("rotate")}>Load</button>
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;
