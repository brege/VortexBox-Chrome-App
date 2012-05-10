function save_Domain() {
  // global constant Domain
  Domain.forEach(function(el, index, array){
    var value = $('#'+el).val();
    localStorage[el] = value;
  });
  
  // Update status to let user know Domain was saved.
  var status = $('#status');
  status
    .html('Local IP <b>saved</b>.  <a href="deck.html" class="vb-button vb-button-submit" id="save">Go to deck</a>')
    .slideDown();
}

/* sets Domain, default[1] = localhost, default[0] = http
*/  
function restore_Domain() {
  // global constant Domain
  var values = [];
  values.push(localStorage['vortexbox-protocol'] || defaults[0]);
  values.push(localStorage['domain'] || defaults[1]);
  
  Domain.forEach(function(el, index, array){
    $('#'+el).val(values[index]);
  });
}
$(document).ready(function(){
  restore_Domain();
  $('a#save').click(function(){
    save_Domain();
  });
});
