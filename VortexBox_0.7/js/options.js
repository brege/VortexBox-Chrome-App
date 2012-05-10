function save_options() {
  // global constant options
  options.forEach(function(el, index, array){
    var value = $('#'+el).val();
    localStorage[el] = value;
  });
  
  // Update status to let user know options were saved.
  var status = $('#status');
  status
    .html('Options <b>saved.</b>')
    .slideDown();
  setTimeout(function() {
    status.slideUp();
  }, 1000);
}

/* options for:
  squeezebox (9000)
  transmission (9091)
  musicip (10002)
  subsonic network (4040)
  subsonic online (username.subsonic.org)
  bliss (3220)
  webmin (10000)
  shellinabox (4200)
*/  
function restore_options() {
  // global constant options
  var values = [];
  values.push(localStorage['vortexbox-protocol'] || defaults[0]);
  values.push(localStorage['domain'] || defaults[1]);
  values.push(localStorage['squeezebox-protocol'] || defaults[2]);
  values.push(localStorage['squeezebox-port'] || defaults[3]);
  values.push(localStorage['transmission-protocol'] || defaults[4]);
  values.push(localStorage['transmission-port'] || defaults[5]);
  values.push(localStorage['musicip-protocol'] || defaults[6]);
  values.push(localStorage['musicip-port'] || defaults[7]);
  values.push(localStorage['subsonic-protocol'] || defaults[8]);
  values.push(localStorage['subsonic-port'] || defaults[9]);
  values.push(localStorage['bliss-protocol'] || defaults[10]);
  values.push(localStorage['bliss-port'] || defaults[11]);
  values.push(localStorage['webmin-protocol'] || defaults[12]);
  values.push(localStorage['webmin-port'] || defaults[13]);
  values.push(localStorage['shellinabox-protocol'] || defaults[14]);
  values.push(localStorage['shellinabox-port'] || defaults[15]);
  values.push(localStorage['subsonic-online-protocol'] || defaults[16]);
  values.push(localStorage['subsonic-online-domain'] || defaults[17]);
  
  options.forEach(function(el, index, array){
    $('#'+el).val(values[index]);
  });
}
$(document).ready(function(){
  restore_options();
  $('a#save').click(function(){
    save_options();
  });
});
