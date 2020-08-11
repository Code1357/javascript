/** 通常関数*/
'use strict';




// consoleに出力
function fn(word) {
  console.log(`はじめての関数${word}`);
}

fn('だよ');




// html.indexに書き出し
function fn2(word) {
  const result = document.getElementById('fn_result_001');
  result.innerHTML = `はじめての関数${word}`;
}

fn2('だよ');
