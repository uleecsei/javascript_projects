
module('Braces simple');

/*
Write a function that validates a series of braces.
*/

function validSequence1(braces) {
  if (!braces) return true;
  let arr = braces.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" && arr[i + 1] == ")") {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr.length == 0 ? true : false;
  // Write code here
}

test('Valid cases', function () {
  equal(validSequence1(''), true, 'empty string validates');
  equal(validSequence1('()'), true, 'valid case');
  equal(validSequence1('()()'), true, 'valid case');
  equal(validSequence1('(())'), true, 'valid case');
  equal(validSequence1('(()())'), true, 'valid case');
});

test('Invalid cases', function () {
  equal(validSequence1(')'), false, 'invalid case');
  equal(validSequence1('('), false, 'invalid case');
  equal(validSequence1(')('), false, 'invalid case');
  equal(validSequence1('(()'), false, 'invalid case');
  equal(validSequence1('())'), false, 'invalid case');
  equal(validSequence1('())()('), false, 'invalid case');
});


