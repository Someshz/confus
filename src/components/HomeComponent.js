import React from 'react';
import {Card,CardBody,CardTitle,CardImg,CardText,CardSubtitle} from 'reactstrap';


function RenderCard({item})
{
    return (
    <Card>
        <CardImg src={item.image} alt={item.name} />
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

function Home(props)
{
    return(
        <div className="container-lg">
            <div className="row ">
                <div className="col-md m-1">
                    <RenderCard item={props.dish}/>

                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promo}/>

                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.lead}/>

                </div>

            </div>
            
        </div>

    );
}


export default Home;