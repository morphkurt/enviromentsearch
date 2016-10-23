var servers;
$( document ).ready(function() {
	var json='{"servers":[{"hostname":"slhay9voswsv01","ip":"203.39.11.20","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv03","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv04","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"},{"hostname":"slhay9voswsv02","ip":"203.39.11.21","role":"wowza","enviroment":"production"}]}';
	servers=JSON.parse(json);
	$("#searchbox").keypress(function(){
		  $("#results").empty();
		  var text = $("#searchbox").val()
		  console.log(text);
		  var first=true;
		  for (i = 0; i < servers.servers.length; i++) { 
			    console.log(servers.servers[i].hostname);
			    console.log(servers.servers[i].role);
			    if((servers.servers[i].hostname.search(text) > -1) || (servers.servers[i].role.search(text) > -1) || (servers.servers[i].enviroment.search(text) > -1) || (servers.servers[i].ip.search(text) > -1)){
				 if(first){
					first=false;
					 $("#results").append('<a href="#" class="list-group-item active">'+servers.servers[i].hostname+'   <span class="glyphicon glyphicon-globe" aria-hidden="true"></span></a>');
				 } else{
					 $("#results").append('<a href="#" class="list-group-item">'+servers.servers[i].hostname+'   <span class="glyphicon glyphicon-globe" aria-hidden="true"></span><span class="glyphicon glyphicon-cloud"></span></a>');
				 }
			    }
		  }
	});
});



