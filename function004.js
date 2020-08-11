/** 即時関数 */
'use strict';

// 通常即時関数,スコープ内で完結するためグローバルに影響を与えない
(function (arg) {
  const argResult = arg + 5;
  console.log(argResult);
})(9);

// アロー関数の即時関数
((arg) => {
  console.log(arg);
})('即時関数だよ');

// 即時関数,スコープ外でも値を保持
const fnResult = ((arg) => {
  const argResult = arg + 4;
  return argResult; 
})(5);
console.log(fnResult);

const result = document.getElementById('fn_result_004');
result.innerHTML = fnResult;