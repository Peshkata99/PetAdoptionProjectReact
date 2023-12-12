import { useParams } from "react-router-dom";
import { getOne, deletePet } from "../../services/petService";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate,Link } from "react-router-dom";

export const PetDetails = ({
    onDeletePet
}) => {
    const navigate = useNavigate()
    const { petId } = useParams()
    const [pet, setPet] = useState({})
    const { userId, token } = useContext(AuthContext)

    useEffect(() => {
        getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId]);

    const onClickDeletePet = async() => {
        onDeletePet(petId)
        deletePet(petId,token)

        navigate('/catalog')
    } 

    return (
        <>
            <h1>Pet Details</h1>
            <img src={pet.imageUrl}></img>
            <p>Name:{pet.name}</p>
            <p>Species:{pet.species}</p>
            <p>Breed:{pet.breed}</p>
            <p>CoatDetails:{pet.coatDetails}</p>
            <p>Adoption Fee:{pet.adoptionFee}</p>
            <p>Description:{pet.description}</p>
            {pet._ownerId === userId && (<div>
                <button onClick={() => onClickDeletePet()}>Delete</button>
                <Link to={`/catalog/${pet._id}/edit`}><button>Edit</button></Link>
            </div>)}

        </>
    );
}