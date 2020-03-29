import React, { Component } from 'react';
import {Media, CardBody } from 'reactstrap';
import Dish from './DishDetailComponent';
import {Card ,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            selected:null,
            info:null,
        }
       
    }
 onFunction(dish)
{
    if(dish!=null)
    {
    console.log("somesh");
    

   this.setState(
   {

   selected:(<Card >
        
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
        <CardTitle >{dish.name}</CardTitle>
        <CardText >{dish.description}</CardText>
        </CardBody>
          
    </Card>),
    info:"Comments",
   info : dish.comments.map(dish => {
        return <div class="text-left font-weight-bold">
            
            {dish.comment}
           <br/>
           <br/>
          
        -- {dish.author} , {dish.date} 
        <br/> 
        <br/> 
        </div>  
         }),
    });
}

    else{
        this.setState= (
   {
   selected:(<div></div>),
   info:(<div> </div>)
   });
  
    }

}
    render()
    {
        const menu=this.props.dishes.map((dishesh)=>{
            return (
                <div key={dishesh.id} className="col-xl-5 col-sm-12 mb-2" >
                    <Card  onClick={()=>this.onFunction(dishesh)}>
                    
                        
                            <CardImg  width="100%"  src={dishesh.image} alt={dishesh.name} />
                      
                        <CardImgOverlay   className="ml-5 ">
                          <CardTitle>{dishesh.name}</CardTitle> 
                            
                        </CardImgOverlay>
                    </Card>

                </div>
            )
        });
        return (
            <div className="container">
                <div class="row">       
                        {menu}                  
                </div>    
                
                <Dish selected1={this.state.selected} info1={this.state.info}/>
           </div>           
       
        );

    
    }
}


export default Menu
