function isClick(elem){
    var element = "<div class='isClicked'></div>";
    elem.children('.isClicked').remove();
    elem.append(element);
    
 $('.menuButton').addClass("isClicked");
}
$(".menuButton").click(function(){
    isClick($(this));
    $(".home").toggleClass("toRight");
});
