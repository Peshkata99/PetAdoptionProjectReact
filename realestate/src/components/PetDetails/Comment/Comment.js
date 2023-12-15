export const Comment = ({
    comment,
    authorEmail
}) => {
    return (
        <div>
            <h4>{authorEmail}</h4>
            <p>{comment}</p>
        </div>
    );
}