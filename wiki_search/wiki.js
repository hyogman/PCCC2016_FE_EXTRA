$(".search").keypress(function(e){
	if(e.which === 13) {	
		$("#searchResults").children().remove(); 
		var searchTerm = $("#searchText").val(); 
		var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchTerm;
		$("#searchText").val("");
		$.getJSON(url, function(results){
			loopThruResults(results);
		});
	}
});

$("#randomButton").on("click", function(){
	$("#searchResults").children().remove(); 
	var url = "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exchars=500&format=json";
	$.getJSON(url, function(results){
		loopThruResults(results);
	});
});

function loopThruResults(results) {
	var pageIdSearch = 'https://en.wikipedia.org/?curid=';
	for(var key in results.query.pages) {
		var wikiPage = {
			pageTitle: results.query.pages[key].title,
			pageExtract: results.query.pages[key].extract,
			pageUrl: pageIdSearch + results.query.pages[key].pageid,
		};
		appendSearchResults(wikiPage);
	}
}

function appendSearchResults(page) {
	$("#searchResults").append("<a class='list-group-item list-group-item-action' target='_blank' href="  + page.pageUrl + 
							    "<h5 class='list-group-item-heading'><strong>" + page.pageTitle + "</strong></h5>" + 
    							"<p class='list-group-item-text'>" + page.pageExtract + "</p></a>");
}



