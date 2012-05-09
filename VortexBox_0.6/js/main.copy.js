var domain = localStorage['domain'] || '';

function init() {
	if ( domain === '' ) {
		var p = document.createElement( 'p' );
		var inp = document.createElement( 'input' );
		var btn = document.createElement( 'input' );
		var txt1 = document.createTextNode( 'Enter your VortexBox local IP below (e.g. 192.168.1.101)' );
		var txt2 = document.createTextNode( 'http://' );
    var txt3 = document.createTextNode( 'You can change your VortexBox IP at anytime. Simply go to the options menu by right clicking the app icon on the main menu and select "options".  ' );
		var font1 = document.createElement( 'font1' );
		var font2 = document.createElement( 'font2' );
		var font3 = document.createElement( 'font3' );

		inp.id = "uname";
		inp.type = "text";
		btn.type = "button";
    btn.style = "vb-button", "vb-button-select";
		btn.value = "Submit";
		font1.style.fontSize = "17px";
		font1.appendChild(txt1);		
		font2.style.color = "grey";
		font2.style.fontSize = "17px";
		font2.appendChild(txt2);		
		font3.style.color = "grey";
		font3.style.fontSize = "15px";
		font3.appendChild(txt3);		

		btn.onclick = function() {
			var name = document.getElementById( 'uname' ).value;
			if ( name !== '' ) {
				localStorage['domain'] = name;
				window.document.location.href = 'deck.html';
			}
		}

		p.appendChild( document.createElement( 'br' ) );	
		p.appendChild( font1 );
		p.appendChild( document.createElement( 'br' ) );
		p.appendChild( document.createElement( 'br' ) );
    p.appendChild( font2 );
		p.appendChild( inp );
		p.appendChild( btn );
		p.appendChild( document.createElement( 'br' ) );
		p.appendChild( document.createElement( 'br' ) );
		p.appendChild( font3 );
		document.getElementById( 'box' ).appendChild( p );				
		
	} else {
		window.document.location.href = 'deck.html';
  }
};

