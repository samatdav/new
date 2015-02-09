// $('#myLightbox').lightbox(options)

    /* show lightbox when clicking a thumbnail */
    // $('a.thumb').click(function(event){
    // 	event.preventDefault();
    // 	var content = $('.modal-body');
    // 	content.empty();
    //   	var title = $(this).attr("title");
    //   	$('.modal-title').html(title);      	
    //   	content.html($(this).html());
    //   	$(".modal-profile").modal({show:true});
    // });


    // $('li').click(function(event){
    // 	event.preventDefault();
    // 	var content = $('.modal-body');
    // 	content.empty();
    //   	var title = $(this).attr("title");
    //   	$('.modal-title').html(title);      	
    //   	content.html($(this).html());
    //   	$(".modal-profile").modal({show:true});
    // });

    // Establish the array which acts as a data source for the list
var list = [
{"type" : "buy", "img" : "img/sun.jpg", "title" : "BDS!", "text" : "wow so wow so wow", "price" : "999", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "text" : "blah blah", "price" : "1000", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "buy", "img" : "img/sun.jpg", "title" : "Hello!", "text" : "blah blah", "price" : "1000", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "text" : "blah blah", "price" : "1000", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];

function makelist(){

for( var i =  0 ; i < list.length; ++i){
	// displayable item 

 //    var listContainer = document.createElement("div");
 //    listContainer.className = "item";
 //    document.querySelectorAll('.' + list[i].type)[0].appendChild(listContainer);
	// $('.' + list[i].type).append(
	// '<li class="various item col-md-12" onclick="location.href=#'+i+
	// ';"><img class="image" src="' + list[i].img + 
	// '" width="90" height="90"/><h2><a href="#' + i + 
	// '">'+list[i].title+'</a></h3><p>'+ list[i].text +'</p><h2>' + list[i].price + 'p</h3></li>');

    var listContainer = document.createElement("div");
    listContainer.className = "item";
    document.querySelectorAll('.' + list[i].type)[0].appendChild(listContainer);
	$('.' + list[i].type).append(
	'<li onclick="location.href=#'+i+'"class="item col-md-12 various" href="#'+i+
	'"><img class="image" src="' + list[i].img + 
	'" width="90" height="90"/><h2><a href="#' + i + 
	'">'+list[i].title+'</a></h2><p>'+ list[i].text +'</p><h3>' + list[i].price + 'p</h3></li>');

	// after item was clicked
	var listContainer = document.createElement("div");
    listContainer.className = "clicked";
    // document.querySelectorAll('.' + list[i].type)[0].appendChild(listContainer);

	$('.clicked').append(
	'<div id="'+i+'" class="box item col-md-12";"><img class="image" src="' + list[i].img + 
	'"/><h1>'+list[i].title+'</h1><h2>'+ list[i].text +'</h2><h3>'+list[i].longtext+'</h3><h2>' + list[i].price + 'p</h2></div>');
    }
}

makelist();


$(document).ready(function() {
    $(".fancybox").fancybox();
});

$(document).ready(function() {
    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
});