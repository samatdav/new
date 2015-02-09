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
{"type" : "buy", "img" : "img/sun.jpg", "title" : "BDS!", "text" : "wow so wow so wow", "price" : "999"},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "text" : "blah blah", "price" : "1000"},
{"type" : "buy", "img" : "img/sun.jpg", "title" : "Hello!", "text" : "blah blah", "price" : "1000"},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "text" : "blah blah", "price" : "1000"}
];

function makelist(){

for( var i =  0 ; i < list.length; ++i){     
    var listContainer = document.createElement("div");
    listContainer.className = "item";
    document.querySelectorAll('.' + list[i].type)[0].appendChild(listContainer);

	$('.' + list[i].type).append(
	'<li class="item col-md-12" onclick="location.href=\'' + list[i].link + 
	'\';"><img class="image" src="' + list[i].img + 
	'" width="90" height="90"/><h2><a href="' + list[i].link + 
	'">'+list[i].title+'</a></h3><p>'+ list[i].text +'</p><h2>' + list[i].price + 'p</h3></li>');
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