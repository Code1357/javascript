/** 非同期処理,Promiseを使う */
// setTimeoutはコードが長くなってしまう
'use strict';

const promise = new Promise((resolve) => {
    resolve('渡したい引数を入れる。そして、', 'がされる'); // ここで引数を2つ設定してみる
});

promise
.then((value, valueTow) => {
  console.log(valueTow); // undefined,基本形では、resolveに渡せる引数は1つ
  console.log(`${value}最初の処理${valueTow}`);
})
.then(() => {
  console.log('次の処理');
})
.then(() => {
  console.log('さらに次の処理')
})

const result = new Promise((resolve) => {
  resolve(new Date); // 日本標準時間をGet
})
result.then( function(data){ 
  console.log(data.getFullYear()); // 西暦をGet
} );

/* 結果：同期処理であれば、2020は最後に来るはずだが、2番目に来ており、非同期処理が成立している
渡したい引数を入れる。そして、最初の処理undefined
2020
次の処理
さらに次の処理
*/

// 上記をPromiseなしで記述してみる
function fn(value, valueTow) {
  console.log(`${value}最初の処理${valueTow}`);
  setTimeout(() => {
    console.log('次の処理');
    (() => {
      console.log('さらに次の処理');
    })();
  }, 0);
}
fn('渡したい引数を入れる。そして、', 'がされる') // 引数は2つ渡せる

function fn2() {
  const dayTime = new Date;
  (() => {
    const yearTime = dayTime.getFullYear();
    console.log(yearTime);
  })(dayTime);
}
fn2(); // なんとなく遅いし、ぱっとしないし、非同期処理が増えるとネストが深くなっちゃう。