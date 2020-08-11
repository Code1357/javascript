/** 関数式*/
'use strict';

// consoleに出力
const fn3 = function (word) {
  console.log(`はじめての関数${word}`);
}
fn3('ですよ');

// html.indexに書き出し
const fn4 = function (word) {
  const result = document.getElementById('fn_result_002');
  result.innerHTML = `はじめての関数${word}`;
}
fn4('ですよ');
