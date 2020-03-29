import React, { Component } from 'react';
import { CardBody } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import {Card ,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            selected:null,
           
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
                <div className="row">       
                        {menu}                  
                </div>    
              
           <DishDetail selected1={this.state.selected}/>
       
                
           </div>           
       
        );

    
    }
}


export default Menu
