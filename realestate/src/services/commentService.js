import * as request from '../services/requester'

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (petId) => {
    const searchQuery = encodeURIComponent(`petId="${petId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (petId, comment, authorEmail, token) => {
    const result = await request.post(baseUrl, { petId, comment, authorEmail }, token);

    return result;
};

export const deleteComment = async(commentId,token,data) => {
    return await request.del(`${baseUrl}/${commentId}`,data,token)
}