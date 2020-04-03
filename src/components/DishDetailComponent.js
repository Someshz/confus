import React, { Component } from 'react';
import {Card, CardBody,CardImg,CardTitle,CardText,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';



function RenderDish({dish1})
{
     if(dish1!=null)
     {
     
            return( <Card >
                   <CardImg width="100%" src={dish1.image} alt={dish1.name}/>
                   <CardBody>
                   <CardTitle >{dish1.name}</CardTitle>
                   <CardText >{dish1.description}</CardText>
                   </CardBody>       
                   </Card>
            )
     }
     else{
         return (
             <div></div>
         )
     }
      
 }
       
 function RenderInfo({dish})
  {
    if(dish!=null)
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
        return(
            <div></div>
        )
    }     
 
}
  
   
         
const DishDetail=(props)=>
{
let info="";
    if(props.comments1!=null)
    {
    info=<RenderInfo dish={props.comments1}/> 
}


    return (
        <div className="container">
            <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selected1.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.selected1.name}</h3>
                            <hr/>
                        </div>
                    </div>
            <div className="row">
                
            <div className="col-md-5 col-sm-12 col-sm-12 font-weight-bold text-left">
            <RenderDish dish1={props.selected1}/>   
            </div>
            <div className="col-md-5 col-sm-12">
            <h1 className="text-left ">Comments</h1>
              {info}
            </div>
            </div>
            </div>
    )
}
        
    



export default DishDetail;