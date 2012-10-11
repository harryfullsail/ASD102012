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
		}
	});
});