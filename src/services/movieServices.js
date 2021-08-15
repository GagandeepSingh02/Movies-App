import axios from 'axios';

export const GetServices = async () => {
    const response = await axios.get("https://messimovies.free.beeceptor.com/movies");
    return response.data;
}