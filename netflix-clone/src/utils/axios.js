import axios from "axios"
  
const instances=axios.create({
    baseUrl="https://api.themoviedb.org/3",
})
export default instances;