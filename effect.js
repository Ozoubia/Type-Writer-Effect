const typewriter = function(textElemenet, words, wait = 3000) {
	this.textElemenet = textElemenet;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
};

// type method
typewriter.prototype.type = function() {};

//Init on DOM loads
document.addEventListener('DOMContentLoaded', init);
//init app
function init() {
	const textElemenet = document.querySelector('txt-type');
	const words = JSON.parse(textElemenet.getAttribute('data-words'));
	const wait = textElemenet.getAttribute('data-wait');
	//init typewriter
	new typewriter(textElemenet, words, wait);
}
