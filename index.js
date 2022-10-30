let enteredName = document.getElementById('enteredName');
let submit = document.getElementById('submitBtn');

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
        .then((response) => {console.log(response)})
})
