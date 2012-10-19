$(document).ready(function() {
	$.ajax({
		"url": "_view/books",
		"dataType": "json",
		"success": function(data) {
			$.each(data.rows, function(index, books){
				var lists = books.value.list; 				
	    		var dateRead = books.value.dateread;				
				var author = books.value.author;				
				var title =	 books.value.title;		
				var publicationDate = books.value.publicationDate;	
				var bookSeries	= books.value.bookSeries;		
				var genre =	books.value.genre;			
				var age = books.value.age;					
				var subject = books.value.subject;				
				var descriptionOfBook = books.value.descriptionOfBook;	
				var rate =	books.value.rate;				
				var comments = books.value.comments;
				$('#booklisted').append(
					$('<li>').append(
						$('<a>').attr("href", '#')
							.text(title)
					)
				);
			});
			$('#booklisted').listview('refresh');
		}
	});
});


//.couch.db
$('#projectfour').live("pageshow", function() {
	$.couch.db("development").view("asdbookapp/books", {
		success: function(data) {
			//console.log(data);
			$('#bookItems').empty();
			$.each(data.rows, function(index, value) {
				var item = (value.value || value.doc);
				$('#bookItems').append(
					$('<li>').append(
						$('<a>')
						.attr("href", "book.html?books=" +item.author)
						.text(item.title)
					)		
				);	
			});
			$('#bookItems').listview('refresh');	
		}
	});
});

var urlVars = function(urlData) {
	var urlData = $($.mobile.activePage).data("url");
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var KeyValue = urlPairs[pair].split('=');
		var Key = decodeURIComponent(keyValue[0]);
		var value = decodeURIComponent(KeyValue[1]);
		urlValues[Key] = value;
	}
	return urlValues;
};

$('#catalog').live("pageshow", function() {
	var books = urlVars()["books"];
	var urlData = $(this).data("url");
	//console.log(program);
	$.couch.db("development").view("asdbookapp/books", {
		key: "book:" + book
	});
});