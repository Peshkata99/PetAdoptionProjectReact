import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../../hooks/useForm';

export const CreatePet= ({
  onCreatePetSubmit
}) => {
  const { values, changeHandler, onSubmit } = useForm({
    name: '',
    imageUrl: '',
    species: '',
    breed:'',
    coatDetails:'',
    adoptionFee:'',
    traits:'',
    description:'',
    
  }, onCreatePetSubmit)
    return (
        <div>
            <h1>Pet submission form</h1>
      <Form method="POST" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formPetName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={values.name} onChange={changeHandler} name="name" type="text" placeholder="Enter pet name" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formPetSpecies">
          <Form.Label>Species</Form.Label>
          <Form.Control value={values.species} onChange={changeHandler} name="species" type="text" placeholder="Enter pet species" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formPetBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control value={values.breed} onChange={changeHandler} name="breed" type="text" placeholder="Enter pet breed" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control value={values.imageUrl} onChange={changeHandler} name="imageUrl" type="text" placeholder="Enter image Url" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formCoatDetails">
          <Form.Label>Coat Details</Form.Label>
          <Form.Control value={values.coatDetails} onChange={changeHandler} name="coatDetails" type="text" placeholder="Enter coat details here" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formTraits">
          <Form.Label>Traits</Form.Label>
          <Form.Control value={values.traits} onChange={changeHandler} name="traits" type="text" placeholder="Enter traits here" />
        </Form.Group>
        <Form.Group  className="mb-3" controlId="formFee">
          <Form.Label>Adoption Fee</Form.Label>
          <Form.Control value={values.adoptionFee} onChange={changeHandler} name="adoptionFee" type="number" placeholder="Enter adoption fee here" />
        </Form.Group>        
        <Form.Group  className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control value={values.description} onChange={changeHandler} name="description" type="text" placeholder="Enter description here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
  }