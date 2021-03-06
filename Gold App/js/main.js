// write your javascript in here
// ASD Project 1
// Harry D Lee 10/12
// main.js

// Wait until the DON is ready.
window.on("DOMContentLoaded", function(){
    
    //getElementById Function
        function g(x){
            var theElement = document.getElementById(x);
            return theElement;
    }
    
      // variable defaults
    var ageGroup = ["--Select Age Group--", "0-2", "3-5", "6-8", "9-12", "Teen", "Adult" ],
        genreValue,
        errMsg = g('errors');
    ;
    
    
         //Creating a select field element and option
    function makeCats(){
        var formTag = document.getElementsByTagName("form"), // this is a array of all the from tags.
            selectLi = g('select'),
            makeSelect = document.appendTo('select');
            makeSelect.attr("id", "age");
        for(var i=0, j=ageGroup.length; i<j; i++){
            var makeOption = document.appendTo('option');
            var optText = ageGroup[i];
            makeOption.attr("value", optText);
            makeOption.html = optText;
            makeSelect.append(makeOption);
        }
        selectLi.append(makeSelect);
    }
    
    makeCats();
    
    //find the value of selected checkbox button.
    function getSelectedcheckbox(){
        var checkbox = document.forms[0].genre;
        for(var i=0; i<checkbox.length; i++){
            if(checkbox[i].checked){
                genreValue = checkbox[i].value;
            }
        }
    }
    
    function toggleControls(n){
        switch(n){
            case "on":
                $('#bookForm').css.display = "none";
                g('clear').css.display = "inline";
                g('displayLink').css.display = "none";
                g('addNew').css.display = "inline";
                break;
            case "off":
                g('bookForm').css.display = "block";
                g('clear').css.display = "inline";
                g('displayLink').css.display = "inline";
                g('addNew').css.display = "none";
                g('items').css.display = "none";
                break;
            default:
                return false;
        
        }
    }
    
    function storeData(key){
        //Set the id to the existing key so it will save over the date.
        //The key is the sme key to be passed along the from the editsubmit event handler
        // The validate function and the pass into the storData function.
        var id;
        if(!key){
             id = Math.floor(Math.random()*100000001);
        }else{
             id = key;
        }
        //Gather up all our form field values and store in an object
        //Object properties contain array with the form label and iput value.
        getSelectedcheckbox();
            var item                      = {};
            item.lists                    = ["Lists:",        $('#lists').val()];
            item.author                   = ["Author:",       g('author').val()];
            item.date1                    = ["Date1",         g('date1').val()];
            item.website                  = ["Website",       g('website').val()];
            item.birth                    = ["Birth",         g('birth').val()];
            item.biography                = ["Biography",     g('biography').val()];
            item.books                    = ["Books",         g('books').val()];
            item.title                    = ["Title:",        g('title').val()];
            item.author1                  = ["Author1",       g('author1').val()];
            item.date2                    = ["Date2",         g('date2').val()];
            item.description              = ["Description",   g('description').val()];
            item.date                     = ["Date",          g('date').val()];
            item.genre                    = ["Genre:", genreValue];
            item.age                      = ["Age:",          g('age').val()];
            item.subject                  = ["Subject:",      g('subject').val()];
            item.rate                     = ["Rate",          g('rate').val()];
            item.comments                 = ["Comments",      g('comments').val()];
        //Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Save");
    }
    
    
       //Get right image to the category.
    function getImage(catName, makeSubList){
        var imageLi = document.appendTo('li');
        makeSubList.append(imageLi);
        var newImg = document.appendTo('img');
        var setSrc = newImg.attr("src", "images/"+ catName + ".png");
        imageLi.append(newImg);
    }
    
     //Auto Populate Local Storage
    function autoFillData(){
        //The actual JSON OBJECT date required for this to work is coming from our json.js.
        //Store the JSON OBJECT into our Local Storage.
        for(var n in JSON){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(JSON[n]));    
        }
    }
    
    function validate(e){
        //deffine the elements we want to check
        var getLists = g('lists');
        var getAuthor = g('author');
        var getTitle = g('title');
        var getAge = g('age');
        var getSubject = g('subject');
        
        //Reset error Messages
        errMsg.html = "";
        getLists.css.border = "1px solid black";
        getAuthor.css.border = "1px solid black";
        getTitle.css.border = "1px solid black";
        getAge.css.border = "1px solid black";
        getSubject.css.border = "1px solid black";
        
        //get error messages
        var messageAry = [];
        //group validation
        if(getLists.val() === "--Choose A List--"){
            var listsError = "Please choose a list.";
            getLists.css.border = "1px solid red";
            messageAry.push(listsError);
        }
        
        // Author Name Validation
        if(getAuthor.val() === ""){
            var authorError = "Please Enter A Author Name.";
            getAuthor.css.border = "1px solid red";
            messageAry.push(authorError);
        }
        
        // Title Validation
        if(getTitle.val() === ""){
            var titleError = "Please Enter A Title.";
            getTitle.css.border = "1px solid red";
            messageAry.push(titleError);
        }
        
        //Age validation
        if(getAge.val() === "--Select Age Group--"){
            var ageError = "Select A Age Group.";
            getAge.css.border = "1px solid red";
            messageAry.push(ageError);
        }
        
        //Subject Validation
        if(getSubject.val() === ""){
            var subjectError = "Choose A Subject.";
            getSubject.css.border = "1px solid red";
            messageAry.push(subjectError);
        }
        
        //if there were errors display them on the screen.
        if(messageAry.length >= 1){
            for(var i=0, j=messageAry.length; i < j; i++){
                var txt = document.appendTo('li');
                txt.html = messageAry[i];
                errMsg.append(txt);
            }
            e.preventDefault();
            return false;
        }else{
            //It all is ok save data! send the key value 
            storeData(this.key);
        }            
    }
    

var save = g('submit');
    save.on("click", validate);
    
     function editItem(){
        //Get the date from our item form in local storage.
        var value = localStorage.find(this.key);
        var item = JSON.parse(value);
        
        //show the from
        toggleControls("off");
        
       //poplate the form fields with current localStorage values.
        g('lists').value       = item.lists[1];
        g('author').value      = item.author[1];
        g('date1').value       = item.date1[1];
        g('website').value     = item.website[1];
        g('birth').value       = item.birth[1];
        g('biography').value   = item.biography[1];
        g('books').value       = item.books[1];
        g('title').value       = item.title[1];
        g('author1').value     = item.author1[1];
        g('date2').value       = item.date2[1];
        g('description').value = item.description[1];
        g('date').value        = item.date[1];
        var checkbox = document.forms(0).genre;
        for (var i=0; i<checkbox.length; i++){
            if(checkbox[i].value == "Fiction" && item.genre[1] == "Fiction"){
                checkbox[i].attr("checked", "checked");
            }else if(checkbox[i].value == "Nonfiction" && item.genre[1] == "Nonfiction"){
                checkbox[i].attr("checked", "checked");
            }
        }
        
        g('age').value = item.age[1];
        g('subject').value = item.subject[1];
        g('rate').value = item.rate[1];
        g('comments').value = item.comments[1];
        
        //Remove the initial listener form in input save cotact button.
        save.off("click", storeData);
        //change the submit button value to edit button.
        g('submit').value = "Edit Information";
        var editSubmit = g('submit');
        //save the keys value in this function as a property of the editSubmit event.
        //so we can use that valuewhen we save the date ed edited
        editSubmit.on("click", validate);
        editSubmit.key = this.key;    
    }
    
    function deleteItem(){
        var ask = confirm("Are you sure you want to delete this information?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Information was deleted!");
            window.location.reload();
        }else{
            alert("information was NOT deleted.");
        }
    }
    
      //Makeing item links.
    //Creat a edit and delete links for our stored items when displayed.
    function makeItemLinks(key, linksLi){
        //add edit singe item link
        var editLink = document.appendTo('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Information";
        editLink.on("click", editItem);
        editLink.html = editText;
        linksLi.append(editLink);
        
        //add a line break
        var breakTag = document.appendTo('br');
        linksLi.append(breakTag);
        
        //add delete single item link
        var deleteLink = document.appendTo('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Information";
        deleteLink.on("click", deleteItem);
        deleteLink.html = deleteText;
        linksLi.append(deleteLink);
    }
    
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
            alert("There is no data in Local Storage so default data was added.");
            autoFillData();
        }
        //Write Date from local storage to the browser.
        var makeDiv = document.appendTo('div');
        makeDiv.attr("id", "items");
        var makeList = document.appendTo('ul');
        makeDiv.append(makeList);
        document.body.append(makeDiv);
        g('items').css.display = "block";
        for(var i=0, len=localStorage.length; i<len;i++){
            var makeli = document.appendTo('li');
            var linksLi = document.appendTo('li');
            makeList.append(makeli);
            var key = localStorage.key(i);
            var value = localStorage.find(key);
            //convert the string from local storage to a vaiue an back to an object using JSON.
            var obj = JSON.parse(value);
            var makeSubList = document.appendTo('ul');
            makeli.append(makeSubList);
            getImage(obj.age[1], makeSubList);
            for(var n in obj){
                var makeSubli = document.appendTo('li');
                makeSubList.append(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.html = optSubText;
                makeSubList.append(linksLi);
            }
            makeItemLinks(localStorage.key(i), linksLi); //Creat our edit and delete buttons link for our item in local storage.
        }
    }
    
 			function clearLocal(){
        if(localStorage.length === 0){
            alert("There is no data to clear.");
        }else{
            localStorage.clear();
            alert("All data deleted!");
            window.location.reload();
            return false;
        }
    } 
    
    	//Sat Link & Submit Click Events
    var displayLink = g('displayLink');
    displayLink.on("click",  getData);
    var clearLink = g('clear');
    clearLink.on("click", clearLocal);
       
       
});
//parseAddbookInfoForm
var parseAddbookInfoForm = function(data){
	//uses form here;
	console.log(data);

};

$(document).ready(function(){

	var abiform = $('#addbookinfoform'),
		berrorslink	= $('#berrorslink')
	;
		
	abiform.validate({
		invalidHandler: function(form, validator){
			berrorslink.click();
			var html ='';
			for(var key in validator.sumitted){
				var label =$('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-fieldcontion-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += 'li' + fieldName +'/li';
			};
			$("#bookerrors ul").html(html);
		},
		submitHandler: function(){
			var data = abiform.serializeArray();
			parseAddbookInfoForm(data);
		}
	});

});
