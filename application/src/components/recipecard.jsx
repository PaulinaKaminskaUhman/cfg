import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { PopoverR } from './popover.jsx';
import hugeText from'./recipes1';

const RecipeCard = ({image, title, text, recipeText}) => {

  return (
    <Card style={{ width: '20rem'}}>
    <Card.Img variant="top" style = {{height : '15rem'}} src={image} />
    <Card.Body>
      <Card.Title style={{ color: 'black', fontSize: "16px"}}>{title}</Card.Title>
      <Card.Text style={{ color: 'black', fontSize: "16px", height : '5rem'}}>
        {text}
      </Card.Text>
      <PopoverR recipeText={recipeText}></PopoverR>
      {/* <Button variant="primary">Make it yourself!</Button> */}
    </Card.Body>
  </Card>
  );
};


export {RecipeCard};