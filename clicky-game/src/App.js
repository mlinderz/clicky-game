import React from 'react';
import logo from './logo.svg';
import './App.css';
import pets from "./pets";

class App extends React.Component {
  state = {
    pets,
    score: 0,
    beenClicked: [],

  }
  renderPets=()=>{
    return this.state.pets.map(pet=> 
      <img src={pet.img} id = {pet.id} className="petImage"onClick={
        this.handleClick
      }
        />
    )
    }
  handleClick=(e)=>{
    console.log("pet clicked")
    console.log(e.target.id)
    if (this.state.beenClicked.includes(e.target.id)){
      alert("you lost")
      this.setState({
        score: 0,
        beenClicked: [],
      })
    } else{
      this.setState({
        beenClicked: this.state.beenClicked.concat(e.target.id),
        score: this.state.score+1
      })
      this.shufflePets()
    }
  }
  shufflePets=()=>{
    this.state.pets.sort(()=>.5-Math.random())
  }
  render() {
    return (
      <div className="App">
   <h1>Clicky-Game</h1>
   <h2>{this.state.score}</h2>
   {
     this.renderPets()
   }
      </div>
    );

  }
}

export default App;
