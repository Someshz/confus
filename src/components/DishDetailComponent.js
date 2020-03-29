import React, { Component } from 'react';
import {Card, CardBody,CardImg,CardTitle,CardText} from 'reactstrap';



function RenderDish({dish1})
{
    
   if(dish1.selected1!=null)
       {   
            return(  <Card >
                   <CardImg width="100%" src={dish1.selected1.image} alt={dish1.selected1.name}/>
                   <CardBody>
                   <CardTitle >{dish1.selected1.name}</CardTitle>
                   <CardText >{dish1.selected1.description}</CardText>
                   </CardBody>       
                   </Card>
            )
       }
   else
       {
           return <div></div>
       }
 }
       
 function RenderInfo({dish,dish2})
  {
    if(dish2!=null)
    {
     return(   
    <div className=" text-left font-weight-bold">    
    {dish.comment}
    <br/>
    <br/>  
  
    -- {dish.author} ,

     {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(dish.date)))}

    <br/> 
    <br/> 
    </div> 
     )       
           
    }
    else{

        return <div></div>
    }
}
  
   
         
const DishDetail=(props)=>
{
    let info=" ";
    if(props.selected1!=null)
    {
    info=props.selected1.comments.map((dish3) => {  
        return (
            <RenderInfo dish={dish3} dish2={props.selected1}/> 
        )    
    });
}
    return (
            <div className="row">
                
            <div className="col-md-5 col-sm-12 col-sm-12 font-weight-bold text-left">
            <RenderDish dish1={props}/>   
            </div>
            <div className="col-md-5 col-sm-12">
            <h1 className="text-left ">Comments</h1>
               {info}
            </div>
            </div>
    )
}
        
    



export default DishDetail;