// import logo from './logo.svg';

import React from 'react';

import Cardlist from './Cardlist';
import Navbar from './component/Navbar';

import SearchBox from './Searchbox';


class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : '',
    }
    
  }

  onInputChange= async  (val)=>{
    await this.setState({searchField:val})
    console.log(this.state.searchField)
  }

  componentDidMount=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    this.setState({robots:users});
  })
  }

  render(){
    const filteredRobots = this.state.robots.filter((robot)=>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })
  return (
    <div  >
      
      <Navbar/>
      
      <div className='App' >
     <h1>Robots</h1>
      <SearchBox onInputChange={this.onInputChange} />
        <Cardlist robots={filteredRobots}/>
      </div>
    </div>
  );
}
}
export default App;
