
module('Braces');

/*
Write a function that validates a series of braces.
*/

function validSequence(braces) {
  if (!braces) return true;
  let arr = braces.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(" && arr[i + 1] == ")" || arr[i] == "[" && arr[i + 1] == "]"
      || arr[i] == "<" && arr[i + 1] == ">" || arr[i] == "{" && arr[i + 1] == "}") {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr.length == 0 ? true : false;
  // Write code here
}


test('Simple valid cases', function () {
  equal(validSequence(''), true, 'empty string validates');
  equal(validSequence('[]'), true, 'square braces');
  equal(validSequence('()'), true, 'round braces');
  equal(validSequence('{}'), true, 'figure braces');
  equal(validSequence('<>'), true, 'brackets');
});

test('Simple invalid cases', function () {
  equal(validSequence('}'), false, 'invalid case');
  equal(validSequence('({'), false, 'invalid case');
  equal(validSequence('[<]'), false, 'invalid case');
  equal(validSequence('({)}'), false, 'invalid case');
});

test('Final cases', function () {
  equal(validSequence('([](<{}>))'), true, 'valid case');
  equal(validSequence('({[](<{}>}))'), false, 'invalid case');
});
