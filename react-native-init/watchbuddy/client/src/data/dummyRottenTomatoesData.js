export default dummyRottenTomatoesData = { 
  id: 12911,
  title: 'The Godfather',
  year: 1972,
  genres: [ 'Drama' ],
  mpaa_rating: 'R',
  runtime: 175,
  critics_consensus: 'One of Hollywood\'s greatest critical and commercial successes, The Godfather gets everything right; not only did the movie transcend expectations, it established new benchmarks for American cinema.',
  release_dates: { theater: '1972-03-24', dvd: '2001-10-09' },
  ratings:
   { critics_rating: 'Certified Fresh',
     critics_score: 100,
     audience_rating: 'Upright',
     audience_score: 97 },
  synopsis: '',
  posters:
   { thumbnail: 'http://content6.flixster.com/movie/11/17/16/11171612_mob.jpg',
     profile: 'http://content6.flixster.com/movie/11/17/16/11171612_pro.jpg',
     detailed: 'http://content6.flixster.com/movie/11/17/16/11171612_det.jpg',
     original: 'http://content6.flixster.com/movie/11/17/16/11171612_ori.jpg' },
  abridged_cast:
   [ { name: 'Marlon Brando', id: '162660428', characters: [Object] },
     { name: 'Al Pacino', id: '162654461', characters: [Object] },
     { name: 'James Caan', id: '162656402', characters: [Object] },
     { name: 'John Cazale', id: '162664256', characters: [Object] },
     { name: 'Robert Duvall', id: '162652186', characters: [Object] } ],
  abridged_directors: [ { name: 'Francis Ford Coppola' } ],
  studio: 'Paramount Pictures',
  alternate_ids: { imdb: '0068646' },
  links:
   { self: 'http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?type=imdb&id=0068646',
     alternate: 'http://www.rottentomatoes.com/m/godfather/',
     cast: 'http://api.rottentomatoes.com/api/public/v1.0/movies/12911/cast.json',
     clips: 'http://api.rottentomatoes.com/api/public/v1.0/movies/12911/clips.json',
     reviews: 'http://api.rottentomatoes.com/api/public/v1.0/movies/12911/reviews.json',
     similar: 'http://api.rottentomatoes.com/api/public/v1.0/movies/12911/similar.json',
     canonical: 'http://api.rottentomatoes.com/api/public/v1.0/movies/12911.json' },
  link_template: 'http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?type=imdb&id={alias-id}'
};