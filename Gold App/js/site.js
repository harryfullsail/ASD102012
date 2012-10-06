$(function(){

	//$('#json').empty();
	$.ajax({
		url: 'xhr/list.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
			for(var i=0, j=response.book1.length; i<j; i++){
				var book = response.book1[i];
				$(''+
				'<div data-role="content">'+
					'<p>'+ book.lists +'</p>'+
					'<p>'+ book.dateRead +'</p>'+
					'<h1>'+ book.author +'</h1>'+
					'<h2>'+ book.title +'</h2>'+
					'<p>'+ book.publicationDate +'</p>'+
					'<p>'+ book.bookSeries +'</p>'+
					'<p>'+ book.genre +'</p>'+
					'<p>'+ book.age +'</p>'+
					'<p>'+ book.subject +'</p>'+
					'<p>'+ book.descriptionOfBook +'</p>'+
					'<p>'+ book.rate +'</p>'+
					'<p>'+ book.comments +'</p>'+
				'</div>'
			).appendTo('#json');
			
			};
				
		}
	});
});

//csv
/*
$(function(){

	//$('#CSV').empty();
	$.ajax({
		url: 'xhr/list.csv',
		type: 'GET',
		dataType: 'csv',
		success: function(csv){
		var book = csv.split("\n");
			for(var i=1, j=book.length; i<j; i++){
				var row = book[i];
				var columns = row.split(",");
				console.log(columns);
				$(''+
				'<div data-role="content">'+
					'<p>'+ book.lists +'</p>'+
					'<p>'+ book.dateRead +'</p>'+
					'<h1>'+ book.author +'</h1>'+
					'<h2>'+ book.title +'</h2>'+
					'<p>'+ book.publicationDate +'</p>'+
					'<p>'+ book.bookSeries +'</p>'+
					'<p>'+ book.genre +'</p>'+
					'<p>'+ book.age +'</p>'+
					'<p>'+ book.subject +'</p>'+
					'<p>'+ book.descriptionOfBook +'</p>'+
					'<p>'+ book.rate +'</p>'+
					'<p>'+ book.comments +'</p>'+
				'</div>'
			).appendTo('#CSV');
			
			};
				
		}
	});
	
});
*/

//xml
/*
$('#list.xml').on('click', function(){
	$.ajax({
		url: 'xhr/list.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
		//var data = $.parseXML(xml);
		//var items = $( data );
		$(items).find('item').each(function(){
			var item = $(this).attr('item');
			//for(var i=0, j=response.book1.length; i<j; i++){
				//var book = response.book1[i];
				//console.log("Name", item.find("name"));
				var lists = $(this).find('lists').text();
				var dateread
				var author
				var title
				var publicationdate
				var bookseries
				var genre
				var age
				var subject
				var descritionodbook
				var rate
				var comments
				$(''+
				'<div data-role="content">'+
					'<p>'+ "Lists" + lists +'</p>'+
					'<p>'+ book.dateRead +'</p>'+
					'<h1>'+ book.author +'</h1>'+
					'<h2>'+ book.title +'</h2>'+
					'<p>'+ book.publicationDate +'</p>'+
					'<p>'+ book.bookSeries +'</p>'+
					'<p>'+ book.genre +'</p>'+
					'<p>'+ book.age +'</p>'+
					'<p>'+ book.subject +'</p>'+
					'<p>'+ book.descriptionOfBook +'</p>'+
					'<p>'+ book.rate +'</p>'+
					'<p>'+ book.comments +'</p>'+
				'</div>'
			).appendTo('#XML');
		
		 };
	   }
	});
});
*/