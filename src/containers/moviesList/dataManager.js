import { GetServices } from "../../services/movieServices";

export const HandleGetMovies = async () => {
    const result = await GetServices();
    return result;
}