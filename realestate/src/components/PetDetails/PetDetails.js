import { useParams } from "react-router-dom";
import { getOne } from "../../services/petService";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const PetDetails = () => {
    const {petId} = useParams()
    const [pet,setPet] = useState({})
    const {userId} = useContext(AuthContext)

    useEffect(() => {
        getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId]);

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
        {pet._ownerId === userId && (<div><button>Delete</button>
        <button>Edit</button>
        </div>)}
        
        </>
    );
}