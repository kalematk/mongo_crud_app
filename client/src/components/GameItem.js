import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Card, Container, Row,Form,Col} from "react-bootstrap";

const GameItem = props=>{

    const baseURL='http://localhost:3002/api';
    const [isEditable,setIsEditable] = useState(false);
    const [gameName,setGameName]= useState(props.game.gameName);
    const [gamePrice,setGamePrice]= useState(props.game.gamePrice);


    const updateGame =async()=>{
        
        const response =await fetch(baseURL + "/updateGame/"+ props.game._id,{
            method : 'PUT',
            headers :{'Content-Type':'application/json'},
            body : JSON.stringify({
                gameName:gameName,
                gamePrice:gamePrice,
                isAvailable:props.game.isAvailable,
                genreId:props.game.genreId,
                gameDescription:props.game.gameDescription,
                gameImge:props.game.gameImge
            })
          });
          const data= await response.json();
          setIsEditable(false);
          props.loadAllGames();
        }


        return(
        <> 
        {
            isEditable ?  (
                <> 
                    <Card style={{margin:12}}>
                        <div style={{overflow:'hidden',width:'100',height:180}}> 
                            <Card.Img variant="top" src={props.game.gameImge}/>
                        </div>
                        <Card.Body>
                            <Card.Title style={{fontSize :15}}>{props.game.gameName} </Card.Title>
                            <Card.Text> Genre : {props.game.genreId.genreName} </Card.Text>
                            <Card.Text><b style={{fontSize:243}}> ${props.game.gamePrice}</b></Card.Text>
                            <Container>
                                <Row>
                                    <Col> 
                                        <Button variant="info" onClick={()=> setIsEditable(!isEditable)}>Edit</Button>
                                    </Col>
                                    <Col> 
                                        <Button variant="success" onClick={updateGame}>save</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>       
                </>
            ):(
                <>
                    <Card style={{margin:12}}>
                        <div style={{overflow:'hidden',width:'100',height:180}}> 
                            <Card.Img variant="top" src={props.game.gameImge}/>
                        </div>
                        <Card.Body>
                            <Card.Title style={{fontSize :15}}>{props.game.gameName} </Card.Title>
                            <Card.Text>${props.game.gamePrice} </Card.Text>
                            <Container>
                                <Row>
                                    <Col> 
                                        <Button variant="info" onClick={()=> setIsEditable(!isEditable)}>Edit</Button>
                                    </Col>
                                    <Col> 
                                        <Button variant="danger" onClick={props.deleteGameClick}>Delete</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </>
            )
        }
        </>
    )
}
 export default GameItem;