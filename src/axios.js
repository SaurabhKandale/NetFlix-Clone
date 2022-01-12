import axios from "axios";

const start=axios.create(
    {
        baseURL:"https://api.themoviedb.org/3"
    }
);

export default start;