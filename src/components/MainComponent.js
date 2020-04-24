import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './HeaderComponent'
// import './App.css';
import Menu from './MenuComponent.js'
import DishDetail from './DishDetailComponent';

import Footer from './FooterComponent';
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {Route,Switch,Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import {withRouter}from "react-router-dom";
import About from './AboutComponent'
import {addComment,fetchDishes} from "../redux/ActionCreator"


const mapStateToProps=(state)=>
{
  return {
  dishes:state.dishes,
  promotions:state.promotions,
  leaders:state.leaders,
  comments:state.comments,
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes:()=>{dispatch(fetchDishes())}
});

class Main extends Component
 {

  componentWillMount() {
    this.props.fetchDishes();
  }

  render()
  {
    const HomePage= ()=>{
      return (
      <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]} 
       promo={this.props.promotions.filter((promo)=>promo.featured)[0]} 
       lead={this.props.leaders.filter((lead)=>lead.featured)[0]}
       dishesFailed={this.props.dishes.errmess}
       dishesLoading={this.props.dishes.isLoading}
      />
      );
    }
const DishWithId=({match})=>
{
  return(
   <DishDetail selected1={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishid,10))[0]} 
   comments1 ={this.props.comments.filter((com)=>com.dishId===parseInt(match.params.dishid,10))}
   isLoading={this.props.dishes.isLoading}
   errmess={this.props.dishes.errmess}
   addComment={this.props.addComment}/>
  )
}

  return (
    <div >
        <Header/>  
        <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/aboutus" component={()=><About leaders={this.props.leaders}/> }/>
        <Route exact path="/menu" component={()=><Menu  dishes={this.props.dishes}/> }/>
        <Route path="/menu/:dishid"  component={DishWithId} />
        <Route path="/contactus" component={Contact} />
        <Redirect to="/home" />
        </Switch>
        <Footer/>
     </div>
  );
 }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
