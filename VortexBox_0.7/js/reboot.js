protocol = localStorage['vortexbox-protocol'] || defaults[0];
domain = localStorage['domain'];

function Domain() {
	window.parent.location.href = protocol+'://'+domain+':'+dive;
}

function reboot() {
  // global constant reboot
  Domain.forEach(function(el, index, array){
    var value = $('#'+el).val();
    localStorage[el] = value;
  });
  
  // Update status to let user know Domain was saved.
  var status = $('#status');
  status
    .html('Go down for reboot. <a href="javascript:Domain()" class="vb-button vb-button-submit" id="save">Reboot</a>')
    .slideDown();
}

/* sets Domain, default[1] = localhost, default[0] = http
function restore_Domain() {
  // global constant Domain
  var values = [];
  values.push(localStorage['vortexbox-protocol'] || defaults[0]);
  values.push(localStorage['domain'] || defaults[1]);
  
  Domain.forEach(function(el, index, array){
    $('#'+el).val(values[index]);
  });
}
*/

$(document).ready(function(){
  $('a#save').click(function(){
    reboot();
  });
});
