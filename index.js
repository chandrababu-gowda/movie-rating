let enteredName = document.getElementById('enteredName');
let submit = document.getElementById('submitBtn');
let displayName = document.querySelector('.movie-name');
let displayImg = document.querySelector('.image');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f1256c51fmsh126ae1c60e04977p131af4jsnb7857c874fd9',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

submit.addEventListener('click',()=>{
    let query = enteredName.value;
    // console.log(query);
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${query}`, options)
        .then(response => response.json())
        .catch(err => console.error(err))
        .then((response) => {
            console.log(response);
            let movieName = response.d[0].l;
            let moviePoster = response.d[0].i.imageUrl
            displayName.innerHTML = `<h1>${movieName}</h1>`;
            displayImg.innerHTML = `<img src=${moviePoster} alt="Movie Poster">`;
            // console.log(resQuery);

        
        })
})








// Jhonny English Reborn