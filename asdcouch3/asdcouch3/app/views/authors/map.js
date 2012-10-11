function (doc) {
 if (doc._id.substr(0,6) === "author") {
    emit(doc._id, {
    	"author":		doc.author,
   		"website":		doc.websit,
    	"books":		doc.books,
    	"bookseries":	doc.bookseries,
    	"biography":	doc.biography,
    	"notes":		doc.notes
  	});
  }
};