import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './HeaderComponent'
// import './App.css';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes'
import Footer from './FooterComponent';


class Main extends Component
 {
   constructor(props)
   {
     super(props);
     this.state=
     {
       dishes:DISHES,
       selected:null
     }
   }
   onFunction(dish)
    {
        this.setState({
            selected:dish,
        })
    }
  render()
  {
  return (
    <div className="App">
        <Header />
        <div class="container">
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onFunction(dishId)} />
        <DishDetail selected1={this.state.selected} />
       
     </div>
     <div>
     <Footer/>
     </div>
        
    </div>
  );
 }
}

export default Main
