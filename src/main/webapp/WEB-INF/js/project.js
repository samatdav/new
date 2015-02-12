var list = [
{"type" : "buy", "field" : "homework", "title" : "Реферат по экономстату", "price" : "999", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "sell", "field" : "cleaning", "title" : "Убраться в комнате", "price" : "1000", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "buy", "field" : "cleaning", "title" : "Убраться на кухне", "price" : "999", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "buy", "field" : "food", "title" : "Приготовить ужин", "price" : "999", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
{"type" : "sell", "field" : "homework", "title" : "Написать курсач", "price" : "1000", "longtext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
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
	'<div onclick="location.href=#'+i+'"class="item col-md-12 various" href="#'+i+
	'"><img class="image img-circle" src="img/' + list[i].field + 
	'.jpg" width="90" height="90"/><h2><a href="#' + i + 
	'">'+list[i].title+'</a></h2><h2 class="price">' + list[i].price + '</h2></div>');


	// after item was clicked
	var listContainer = document.createElement("div");
    listContainer.className = "clicked";
	$('.clicked').append(
	'<div id="'+i+'" class="box item col-md-12";"><img class="image img-responsive" src="img/' + list[i].field +
    '.jpg"/><div class="info"><h1>'+list[i].title+'</h1><h3>'+list[i].longtext+'</h3><h2>' + list[i].price + '</h2><button type="button" class="btnbuy btn btn-default btn-lg btn-block">ЗАКАЗАТЬ!</button></div></div>');
    }
}



$(document).ready(function() {
    $(".fancybox").fancybox();

});

$(document).ready(function() {
    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 410,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
});


    // $(function(){
    //   $("#new").load("form.html"); 
    // });


$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('#new').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});
