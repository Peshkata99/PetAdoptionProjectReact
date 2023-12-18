import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
export const Comment = ({
    comment,
    _id,
    authorEmail,
    _ownerId,
    onClickDeleteComment
    
}) => {
    const {userId} = useContext(AuthContext)
    const isOwner = userId === _ownerId
    return (
        <div>
            <h4>{authorEmail}</h4>
            <p>{comment}</p>
            {isOwner && (<div>
                <button onClick={() => onClickDeleteComment(_id)}>Delete</button>
            </div>)}
        </div>
    );
}