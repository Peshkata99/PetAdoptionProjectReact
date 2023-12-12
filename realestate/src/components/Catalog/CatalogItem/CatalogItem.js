import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export const CatalogItem = ({
  name,
  imageUrl,
  breed,
  traits,
  _id
}) => {
return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} placeholder={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{breed}</Card.Title>
        <Card.Text>
          {traits}
        </Card.Text>
        <Link to={`/catalog/${_id}`}><Button variant="primary">Details</Button></Link>
      </Card.Body>
    </Card>
  );
}