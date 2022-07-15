// a=function(){
// 	alert('aa');
// }
//$.fn是固定的
//.a是變數
$.fn.a=function(){
	$(this).text('aaa');
}
// $.fn.a=function(){
// 	$(this).text('aaa');
// }