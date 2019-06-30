//ES6 class
class typewriter {
	constructor(textElemenet, words, wait = 3000) {
		this.textElemenet = textElemenet;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	type() {
		//current index of word
		const current = this.wordIndex % this.words.length;
		// get full text of current word
		const fulltext = this.words[current];

		//check if deleting
		if (this.isDeleting) {
			//remove a character
			this.txt = fulltext.substring(0, this.txt.length - 1);
		}
		else {
			//add a character
			this.txt = fulltext.substring(0, this.txt.length + 1);
		}

		//insert txt into element
		this.textElemenet.innerHTML = `<span class="txt">${this.txt}</span>`;

		//initial type speed
		let typespeed = 300;

		if (this.isDeleting) {
			typespeed /= 2;
		}

		// if the word is complete
		if (!this.isDeleting && this.txt === fulltext) {
			//make a pause at the end
			typespeed = this.wait;
			//set delete to true
			this.isDeleting = true;
		}
		else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			//move to the next word
			this.wordIndex++;
			//pause before starting to type again
			typespeed = 500;
		}

		setTimeout(() => this.type(), typespeed);
	}
}

//Init on DOM loads
document.addEventListener('DOMContentLoaded', init);
//init app
function init() {
	const textElemenet = document.querySelector('.text-type');
	const words = JSON.parse(textElemenet.getAttribute('data-words'));
	const wait = textElemenet.getAttribute('data-wait');
	//init typewriter
	new typewriter(textElemenet, words, wait);
}
