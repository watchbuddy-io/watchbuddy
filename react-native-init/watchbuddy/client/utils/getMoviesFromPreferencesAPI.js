import axios from 'axios';
/* input array of objects with title and genre
{
  title:
  genre:
}
*/
export default getMoviesByPreferences = (preferencesArray) => {
  // loop through preferences array, structure query to an API. Ensure its URI encoded if needed.
  return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ffbcbaa76073ddfb688612a009893899&language=en-US&query=comedy&page=1`)
    .then(data => return data.results);
}