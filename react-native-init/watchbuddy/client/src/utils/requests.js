getMovieData() {
  axios.get('http://127.0.0.1:1338').then(data => {
    this.setState({swipeDeckImages: data});
  })
  .catch(err => console.log(err));
}