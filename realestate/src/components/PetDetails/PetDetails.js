import { useParams } from "react-router-dom";
import { getOne, deletePet } from "../../services/petService";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import styles from './PetDetails.module.css';
import { AddComment } from "./AddComment/AddComment";
import { Comment } from "./Comment/Comment";

export const PetDetails = ({
    onDeletePet
}) => {
    const navigate = useNavigate()
    const { petId } = useParams()
    const [pet, setPet] = useState({})
    const { userId, token, isAuthenticated } = useContext(AuthContext)
    const isOwner = pet._ownerId === userId

    useEffect(() => {
        getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId]);

    const onClickDeletePet = async () => {
        if (window.confirm('are you sure you want to delete this?')) {
            onDeletePet(petId)
            deletePet(petId, token)

            navigate('/catalog')
        } else {

        }
    }

    return (
        <article className={styles.details}>
            <h1>Pet Details</h1>
            <img className={styles.detailsImg} src={pet.imageUrl} alt={pet.name}></img>
            <p>Name:{pet.name}</p>
            <p>Species:{pet.species}</p>
            <p>Breed:{pet.breed}</p>
            <p>CoatDetails:{pet.coatDetails}</p>
            <p>Adoption Fee:{pet.adoptionFee}</p>
            <p>Description:{pet.description}</p>
            {isOwner && (<div>
                <button onClick={() => onClickDeletePet()}>Delete</button>
                <Link to={`/catalog/${pet._id}/edit`}><button>Edit</button></Link>
            </div>)}
            <h3>Comment Section</h3>
            {!isOwner && isAuthenticated && <AddComment />}

            <div>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    );
}