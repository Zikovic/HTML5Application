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

/*
$(".subMenus").first().click(function(){
    var $this  = $(this);
    var $other = $(".subMenus").not($this);
    $this.find(".subMenuContentImage").remove();
     $this.find(".trasparent").remove();
    $this.addClass("isPage");
    $other.remove();
    $this.addClass();
});
*/
