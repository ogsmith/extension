(function() {
  $.ajax({
    url: 'https://www.americastestkitchen.com/api/v4/token',
    data: '',
    headers: {
      "Authorization": "Basic " + btoa('atk' + ":" + 'ezBD2AwjQos63EZbpCUeYAtt')
    },
    success: function(d) {
      hitHomepage();
    }
  });

  function hitHomepage() {
    $.ajax({
      url: 'https://www.americastestkitchen.com/api/v4/atk/homepage?site_key=atk',
      data: '',
      success: function(d) {
	console.log(d)
      },
      dataType: 'json'
    });
  }
})();


