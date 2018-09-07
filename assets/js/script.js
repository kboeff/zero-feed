// TODO: move the code from <script> tag here
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.twitter.com/1.1/statuses/home_timeline.json", "true");

document.getElementById('tweet-btn').addEventListener('click', getTweets);

function getTweets() {
	console.log('clicked');
	if(xhr.status == 200) {
		console.log(this);
	}
	
}
