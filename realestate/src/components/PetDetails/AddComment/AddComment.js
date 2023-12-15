import {useForm} from '../../../hooks/useForm' 

export const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="comment">Content:</label>
            <textarea onChange={changeHandler} value={values.comment} type="textarea" name="comment" placeholder="type comment here..." /><br />
            <button>Comment</button>
        </form>
    )
}