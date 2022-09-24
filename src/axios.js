import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  //   https://api.themoviedb.org/3/discover/tv?api_key=${b3999914dbe3f2091d6b0c88292a991d}&with_networks=213
})

export default instance
