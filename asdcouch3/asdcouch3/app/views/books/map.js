function(doc) {
  if (doc._id.substr(0, 4) === "Book") {
    emit(doc._id, {
    	"lists": 				doc.lists,			
	    "dateRead":				doc.dateRead,			
		"author": 				doc.author,			
		"title": 				doc.title,			
		"publicationDate":		doc.publicationDate, 	
		"bookSeries":			doc.bookSeries,	
		"genre": 				doc.genre,	
		"age": 					doc.age,	
		"subject": 				doc.subject,	
		"descriptionOfBook":	doc.descriptionOfBook,	
		"rate":					doc.rate,	
		"comments": 			doc.comments
  	});
  }
};