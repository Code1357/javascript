/** アロー関数*/
'use strict';

// consoleに出力
const fn5 = (word) => {
  console.log(`はじめての関数${word}`);
}
fn5('なんじゃない');

// html.indexに書き出し
const fn6 = (word) => {
  const result = document.getElementById('fn_result_003');
  result.innerHTML = `はじめての関数${word}`;
}

fn6('なんじゃない');