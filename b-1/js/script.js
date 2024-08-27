jQuery(document).ready(function () {
 // submenu
 $(".navi > li").mouseover(function () {
  $(".submenu-bg").stop().slideDown(200);
  $(".submenu").stop().slideDown(500);
 });
 $(".navi > li").mouseout(function () {
  $(".submenu-bg").stop().slideUp(500);
  $(".submenu").stop().slideUp(500);
 });

 // image slide

 // tabmenu
 $(".tabmenu > ul > li > a").click(function (e) {
  e.preventDefault();
  $(this).parent().addClass("active").siblings().removeClass("active");
 });

 // modal
});
