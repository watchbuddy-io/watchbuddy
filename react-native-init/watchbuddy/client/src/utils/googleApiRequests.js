import axios from 'axios';
import selectionDescriptionMap from '../data/selectionDescriptionMap';
import _ from 'underscore';

var buildQuery = function(movies) {
  return selectionDescriptionMap[_.uniq(movies.map(movie => movie.id)).join('')] || 'This user does not like movies in the selection';
};

export default googleApiRequests = {
  queryGoogleApi: function(movies) {
    console.log('CALLING AXIOS');
    return axios.post('http://13.57.94.147:8080/userprefs', 
    {
      prefs: buildQuery(movies)
    });
  }
};