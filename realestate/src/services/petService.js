import * as request from './requester'

const baseUrl = "http://localhost:3030/data/pets"

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const pets = Object.values(result);

    return pets;
}

export const getOne = async (petId) => {
    const result = await request.get(`${baseUrl}/${petId}`)

    return result;
}
export const create = async (data, token) => {
    const result = await request.post(baseUrl, data, token)
    return result;
}
export const deletePet = async (petId,token,data) => {  
    return await request.del(`${baseUrl}/${petId}`,data,token);
}

export const editPet = async (petId,data,token) => {
    return await request.put(`${baseUrl}/${petId}`,data,token)
}
