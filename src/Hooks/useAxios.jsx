import axios from "axios";

const axiosSecure = axios.create({baseURL:'https://food-menu-server.vercel.app'});

const useAxios = () => {



    return axiosSecure
};

export default useAxios;