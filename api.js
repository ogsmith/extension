function getHomepage() {
  console.log("in api.js");
  $.ajax({
        type: "GET",
        dataType: "json",
	url: "https://www.americastestkitchen.com/api/v4/atk/homepage?site_key=atk",
	success: function(data){
	  alert(data);
	}
    });
}()
