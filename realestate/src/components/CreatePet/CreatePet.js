import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const CreatePet= () => {
    return (
        <div>
            <h1>Pet submission form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formPetName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter pet name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPetBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control type="text" placeholder="Enter pet breed" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFee">
          <Form.Label>Adoption Fee</Form.Label>
          <Form.Control type="number" placeholder="Enter adoption fee here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFee">
          <Form.Label>Coat Length</Form.Label>
          <Form.Control type="text" placeholder="Enter coat length here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter description here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
  }