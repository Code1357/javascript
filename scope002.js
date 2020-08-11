/** ブロックスコープ */
'use strict';

const scope1 = 'グローバルだよ';

// ブロックで囲んであげる事で、コードが長くなった時に不要なトラブルを防げる
{
  console.log(`${scope1}。だから参照できるよ。`);

  const scope2 = 'ブロックスコープだよ'
  console.log(`${scope2}。同じブロック内だから参照できるよ。`);

  var scope3 = 'こればどこでも参照されちゃう'
  console.log(`${scope3}。同じブロック内では、scope2と一緒で参照可能。`);
}

console.log(`${scope3}。エラーにならないんすよねー。基本的にvarは今は使わないでね。`)
console.log(`${scope2}残念。ブロックスコープの変数は外から参照できないよ。`); // Error
z