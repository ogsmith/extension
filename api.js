(function() {
  please.get('https://www.americastestkitchen.com/api/v4/atk/homepage?site_key=atk', {
    success: function(d) {
      console.log(d);
    }
  });
})();


