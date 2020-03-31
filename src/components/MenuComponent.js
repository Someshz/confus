import React, { Component } from 'react';


import {Card ,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';

function RenderMenuItem({dishesh,onClick})
{
    return(

    <Card  onClick={()=> onClick(dishesh)}>    
                            <CardImg  width="100%"  src={dishesh.image} alt={dishesh.name} />
                        <CardImgOverlay   className="ml-5 ">
                          <CardTitle>{dishesh.name}</CardTitle>   
                        </CardImgOverlay>
                    </Card>
    )
}
   
const Menu=(props)=>
    {
        const menu=props.dishes.map((dishesh)=>{
            return (
                <div key={dishesh.id} className="col-xl-5 mb-2" >
                  <RenderMenuItem dishesh={dishesh} onClick={props.onClick} />  
                </div>
            )
        });
        return (
            
                <div className="container-md">
                    <div className="row">
                    {menu} </div>                             
                </div>    
              
          
        );
    }



export default Menu
