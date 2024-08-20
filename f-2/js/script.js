jQuery(document).ready(function () {
 // submenu
 $(".navi > li").mouseover(function () {
  $(this).find(".submenu").stop().slideDown(300);
 });
 $(".navi > li").mouseout(function () {
  $(this).find(".submenu").stop().slideUp(300);
 });

 // image fade in-out
 $(".img-slide a:gt(0)").hide();
 setInterval(function () {
  $(".img-slide a:first-child")
   .fadeOut(1000)
   .next("a")
   .fadeIn(1000)
   .end()
   .appendTo(".img-slide");
 }, 3000);
});
