import React from 'react';
import {Card,CardBody,CardTitle,CardImg,CardText,CardSubtitle} from 'reactstrap';
import {Loading} from "./LoadingComponent";
import {baseUrl} from '../shared/baseUrl';



function RenderCard({item,load,fail})
{
    if(load)
    {
        return(  
             <Loading />)
    }
    else if(fail)
    {
        return( <div>{fail}</div>)
    }
    else {
        
    return (
       
    <Card>
        <CardImg src={baseUrl + item.image} alt={item.name} />
        <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {
                    item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null
                }
        <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
    );
    }
     
}

function Home(props)
{
    return(
        <div className="container-lg">
            <div className="row ">
                <div className="col-md m-1">
                    <RenderCard item={props.dish} load={props.dishesLoading} fail={props.dishesFailed}/>

                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promo} load={props.promosLoading} fail={props.promosFailed}/>

                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.lead}/>

                </div>

            </div>
            
        </div>

    );
}


export default Home;