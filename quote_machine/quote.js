var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

$("#quoteButton").on("click", callback); 
	
$(document).keypress(function(e){
	if(e.which == 13) {
		callback(); 
	}
})


function callback () {
	var url = "http://quotes.stormconsultancy.co.uk/random.json?callback=?";
		$.getJSON(url).then(function(result){
		setResultsToHtml(result);
	});
	var color = Math.floor(Math.random() * colors.length);
	console.log(colors[color]);
     $("body").css("backgroundColor", colors[color]);
	
}

function setResultsToHtml(quote) {
	$("#author").text(quote.author);
	$("#quoteBody").html("<em>" + quote.quote + "</em>");
}


