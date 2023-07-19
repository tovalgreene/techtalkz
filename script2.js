// dad joke api
const url = 'https://api.chucknorris.io/jokes/random';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '96db86f5f1mshddf03195efca624p16ceb4jsna0615d5d6e25',
		'X-RapidAPI-Host': 'words-of-wisdom-the-famous-quotes-api2.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result = response.text();
	console.log(result);
} catch (error) {
	
}


// attaching dad joke api to button
$(document).ready(function () {
    $("#button-16-mantragenerator").click(function () {
    generateQuote();
    });
});

async function generateQuote() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        const phrase = await response.json();

        $("#inspirationalquote").html(phrase['value']).fadeIn();
        console.log(phrase['value']);

        } catch (error) {
            console.log('Error:', error);
        }

    }