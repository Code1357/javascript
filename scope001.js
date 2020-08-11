/** 関数スコープ*/
'use strict';

// consoleに出力
const fn7 = (word) => {
  console.log(`はじめての関数${word}`);
}

fn7('実行しちゃうよ');
const fn8 = fn7('実行しちゃったよ');

// グローバルスコープで参照できない
const fn10 = (fn8) => {
  const result = document.getElementById('scope_result_001');
  result.innerHTML = fn8;
}
fn10(fn8); // 結果：undefined,参照できない




// グローバルスコープで参照したい場合(メモリの管理を意識する事)
function fn11(word) {
  const stWord = `参照${word}`;
  return stWord;
}
const fn12 = fn11('できたよ');
console.log(fn12);

// グローバルスコープで参照できた
const fn13 = (fn12) => {
  const result = document.getElementById(`scope_result_001_1`);
  result.innerHTML = fn12;
}
fn13(fn12); // 参照できたよ
