import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CatalogItem = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pet Name</Card.Title>
        <Card.Title>Pet Breed</Card.Title>
        <Card.Text>
          Short Pet Summary
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}