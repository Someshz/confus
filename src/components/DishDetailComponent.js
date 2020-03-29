import React, { Component } from 'react';



class Dish extends Component
{

    constructor(props)
    {
       super(); 
    }
    render()
    {
        return(
        
            <div class="row">
            <div class="col-md-5 col-sm-12 col-sm-12 font-weight-bold text-left">
               {this.props.selected1}
            </div>
            <div class="col-md-5 col-sm-12">
            <h1 class="text-left ">Comments</h1>
                {this.props.info1}
            </div>
            </div>);
        
    }

}

export default Dish;