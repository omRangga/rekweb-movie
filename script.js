function searchMovies(keyword){
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange=function(){
		if (xhr.readyState ===4 && xhr.status ===200) {
			let movies =JSON.parse(xhr.response);
			console.log(movies.Search);
			searchMovies(movies.Search);
		}
	}

	xhr.open('GET','http://www.omdbapi.com/?i=tt3896198&apikey=676d1224&s='+keyword);
	xhr.send();
}

function showMovies(movies){
	let cards ='';
	movies.forEach(function(movies){
		cards += `<div class="col-4 my-3">
        <div class="card">
  <img src="${movie.Poster}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${movie.Title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
    <a href="detail.php?id=${movie.imdbID}" class="btn btn-primary">Show Detail</a>
    </div>
  </div>
</div>`;
	});
	console.log('cards');
}

let movieList = document.querySelector('.movie-list');
searchMovies('nun');