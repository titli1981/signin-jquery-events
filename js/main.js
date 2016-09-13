$(document).ready(function() {
    console.log( "ready!");

$(".signin").click(function(){
    $('.modal').fadeIn();
});
$(".close").click(function(){
    $('.modal').fadeOut();
});

$(".submit").click(function(){
    $("input").addClass(".error")
});

});
