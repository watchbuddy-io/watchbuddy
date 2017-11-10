import axios from 'axios';
import selectionDescriptionMap from '../data/selectionDescriptionMap';
import _ from 'underscore';

var buildQuery = function(movies) {
  return selectionDescriptionMap[_.uniq(movies.map(movie => movie.id)).join('')] || 'This user does not like movies in the selection';
};

export default googleApiRequests = {
  queryGoogleApi: function(movies) {
    console.log('CALLING AXIOS');
<<<<<<< HEAD
    return axios.post('http://13.57.94.147/userprefs', 
=======
    return axios.post('http://13.57.94.147:8080/userprefs', 
>>>>>>> c16c7c751d5e9606b17dee26dfd7a0441c52fd64
    {
      prefs: buildQuery(movies)
    });
  }
};