import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import styles from './PetDetails.module.css';
import { AddComment } from "./AddComment/AddComment";
import { Comment } from "./Comment/Comment";

import * as commentService from "../../services/commentService"
import * as petService from "../../services/petService";

export const PetDetails = ({
    onDeletePet
}) => {
    const navigate = useNavigate()
    const { petId } = useParams()
    const [pet, setPet] = useState({})
    const [comments, setComments] = useState([])
    const { userId, token, isAuthenticated,userEmail } = useContext(AuthContext)
    const isOwner = pet._ownerId === userId

    useEffect(() => {
        Promise.all([
            petService.getOne(petId),
        commentService.getAll(petId)])
        .then(([petData, userComments]) => {
                setPet(petData);
                setComments(userComments);
            })
    }, [petId]);

    const onClickDeletePet = async () => {
        if (window.confirm('are you sure you want to delete this pet?')) {
            onDeletePet(petId)
            petService.deletePet(petId, token)

            navigate('/catalog')
        } else {

        }
    }

    const onCommentSubmit = async (values) => {
        const newComment = await commentService.create(petId, values.comment,userEmail, token);

        setComments(state => [...state, newComment])
    };
    const onClickDeleteComment = async (commentId) => {
        if(window.confirm('are you sure you want to delete this comment?')){
            commentService.deleteComment(commentId,token)
            setComments(state => state.filter(c => c._id !== commentId))
        } else{

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
            {!isOwner && isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

            <div>
                {comments.map(c => <Comment onClickDeleteComment={onClickDeleteComment} key={c._id} {...c}/>)}
                {comments.length === 0 && <p>There are no comments yet.</p>}
            </div>

        </article>
    );
}