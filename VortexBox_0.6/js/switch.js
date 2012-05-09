var domain = localStorage['domain'] || '';

function init() {
	if ( domain === '' || defaults[1]) {
		window.document.location.href = 'main.html';
	} else {
		window.document.location.href = 'deck.html';
  }
};

