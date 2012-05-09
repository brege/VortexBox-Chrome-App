$.fn.extend({
    resizeToFit: function() {
	return this
	    .css('height',($(window).height()-10)+'px')
	    .css('width',($(window).width()-5)+'px');
    }	
})
function popupAlert(message) {
    $('div#status')
        .html(message)
        .slideDown();
    setTimeout(function(){
        $('div#status')
            .slideUp();
    }, 5000);
}
function connectToRemote(){
    var server = $('input', conn).val() || server;
    var squeezebox-port = localStorage['squeezebox-port'] || defaults[1];
    var shellinabox-port = localStorage['shellinabox-port'] || defaults[2];
    var protocol = localStorage['protocol'] || defaults[3];
    var conn = $('div#connection');
    var remoteHost = protocol+'://'+server+':'+shellinabox-port;
    var g = $.ajax({
        url: remoteHost,
        error: function(one, two, three) {
	    popupAlert('Server not found. Are you running <a target="_new" href="http://code.google.com/p/shellinabox/">Shell In A Box</a>?');
        },
        success: function(one, two, three) {
	    conn.removeClass('fadeIn').addClass('fadeOut');
            $('iframe#terminal').attr('src', remoteHost);
            document.title = server;
        }
    });
}
$(document).ready(function(){
    $('iframe#terminal').resizeToFit();
    var server = localStorage['server'] || defaults[0];
    var conn = $('div#connection');
    $('a#connect', conn).click(function(){
	connectToRemote();
    });
    $('form', conn)
        .submit(function(){
            $('a#connect', conn).click();
            return false;
        });
    $('input', conn)
        .val(server)
        .click(function(){
            $(this).val('');
        })
        .focus();	
});
$(window).resize(function(){
	$('iframe#terminal').resizeToFit();
});
