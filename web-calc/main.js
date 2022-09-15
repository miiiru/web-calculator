$('#button-add').on('click', function(e) {
  // 左のテキストボックスに入力された値を取得する
  var str1 = $('#num1').val();
  // 取得した値を数値に変換する
  var number1 = parseInt(str1);
  
  // 右のテキストボックスに入力された値を取得する
  var str2 = $('#num2').val();
  // 取得した値を数値に変換する
  var number2 = parseInt(str2);
  
  // 足し算を実施し、boxに出力する
  var box = $('#box');
  box.text(number1 + number2);
  
});

$('#button-sub').on('click', function(e) {
  // 左のテキストボックスに入力された値を取得する
  var str1 = $('#num1').val();
  // 取得した値を数値に変換する
  var number1 = parseInt(str1);
  
  // 右のテキストボックスに入力された値を取得する
  var str2 = $('#num2').val();
  // 取得した値を数値に変換する
  var number2 = parseInt(str2);
  
  // 引き算を実施し、boxに出力する
  var box = $('#box');
  box.text(number1 - number2);
  
});

$('#button-mul').on('click', function(e) {
  // 左のテキストボックスに入力された値を取得する
  var str1 = $('#num1').val();
  // 取得した値を数値に変換する
  var number1 = parseInt(str1);
  
  // 右のテキストボックスに入力された値を取得する
  var str2 = $('#num2').val();
  // 取得した値を数値に変換する
  var number2 = parseInt(str2);
  
  // 掛け算を実施し、boxに出力する
  var box = $('#box');
  box.text(number1 * number2);
  
});

$('#button-div').on('click', function(e) {
  // 左のテキストボックスに入力された値を取得する
  var str1 = $('#num1').val();
  // 取得した値を数値に変換する
  var number1 = parseInt(str1);
  
  // 右のテキストボックスに入力された値を取得する
  var str2 = $('#num2').val();
  // 取得した値を数値に変換する
  var number2 = parseInt(str2);
  
  // 割り算を実施し、boxに出力する
  var box = $('#box');
  box.text(number1 / number2);
  
});