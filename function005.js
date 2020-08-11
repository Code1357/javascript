/** 高階関数,コールバック関数 */
'use strict';

// 通常関数が2つ
function fn () {
  const result = '後処理となるfnが高階関数となる';
  console.log(result);
}

const myFn = function fn2 () {
  const result = '先に処理されたmyFnがコールバック関数';
  console.log(result);
}

// ドッキング,fnを高階関数と呼ぶ
// 引数して渡された関数myFnがコールバック関数となる
// 実行はfnにやってもらう,先にmyFnが実行され、その後にfn実行されているのがわかる
fn(myFn());

// 上記の理解と色々な関数の組み合わせにより処理の順番が変更されるので注意が必要