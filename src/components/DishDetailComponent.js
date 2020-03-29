import React, { Component } from 'react';
import {Card, CardBody,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component
{
    constructor(props)
    {
      super();
    //    this.state=
    //    {
    //        selected:null,
    //        info:null,
    //    } 
    }
    render()
    {
     let selected="";
     let  info=";"


    if(this.props.selected1!=null)
        {   //console.log(this.props.selected1)
            
                selected=<Card >
                    <CardImg width="100%" src={this.props.selected1.image} alt={this.props.selected1.name}/>
                    <CardBody>
                    <CardTitle >{this.props.selected1.name}</CardTitle>
                    <CardText >{this.props.selected1.description}</CardText>
                    </CardBody>       
                    </Card>
                info = this.props.selected1.comments.map((dish) => {
                        return <div className="text-left font-weight-bold">    
                        {dish.comment}
                        <br/>
                        <br/>  
                        -- {dish.author} , {dish.date} 
                        <br/> 
                        <br/> 
                        </div> });
             
        }

    else
    {
            
              
                    selected=<div></div>
                    info=<div> </div>
              
  
    }
         

        return(
        
            <div className="row">
            <div className="col-md-5 col-sm-12 col-sm-12 font-weight-bold text-left">
               {selected}
            </div>
            <div className="col-md-5 col-sm-12">
            <h1 className="text-left ">Comments</h1>
                {info}
            </div>
            </div>);
        
    }

}

export default DishDetail;