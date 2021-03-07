// var orange = 120;
// var apple = 120;

// if(orange < apple){
//   alert("みかんの値段がりんごより安い");
// } else if(orange == apple){
//   alert("みかんとりんごが同じ値段");
// } else{
//   alert("みかんの値段がりんごより高い");
// }

var max = 100;
var num = 1;
var count = 0;

while (num < max) {
  num = num * 2;
  count = count + 1;
}

alert("1に2を掛け続けて" + max + "を超えるのに必要な回数は" + count + "回です")
