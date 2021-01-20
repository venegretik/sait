
$(".loupe").click(function () {
$(".full-block").addClass("display-block").removeClass("display-none");

$(this).addClass("active");
$(this).removeClass("loupe");
$("#block").click(function () {
$(".full-block").removeClass("display-block").addClass("display-none");
});

});
