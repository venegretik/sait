let close=false;
$("#block").click(function () {
if (close==false) {
$(".full-block").addClass("display-block").removeClass("display-none");
close=true;
}
else{
$(".full-block").addClass("display-none").removeClass("display-block");
close=false;
}
});


