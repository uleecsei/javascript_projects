module('Balls');

/* В одній комп'ютерній грі гравець виставляє в лінію кульки різних кольорів.
Коли утворюється безперервний ланцюжок з трьох і більше кульок одного кольору,
вона видаляється з лінії. Всі кульки при цьому зсуваються один до одного, і
ситуація може повторитися.

Напишіть функцію, яка по даній ситуації визначає, скільки кульок буде
"знищено". Природно, безперервних ланцюжків з трьох і більше одноколірних куль в
початковий момент може бути не більше одного.  */

function countDel(arr) {
  let counter = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++;
    }
    else {
      if (counter > 1) {
        arr.splice(arr.indexOf(arr[i]), counter + 1);
        sum += counter + 1;
        i = 0;
        counter = 0;
      }
      else {
        counter = 0;
      }
    }
  }
  return sum;
  // Write your code here 
}

test('Balls', function () {
  equal(countDel([5, 1, 3, 3, 3, 2]), 3, '');
  equal(countDel([5, 1, 2, 3, 3, 3]), 3, '');
  equal(countDel([3, 3, 3, 2]), 3, '');
  equal(countDel([5, 1, 3, 4, 3, 3]), 0, '');
  equal(countDel([5, 1, 3, 3, 3, 1, 1, 2]), 6, '');
  equal(countDel([9, 5, 5, 1, 3, 3, 3, 1, 1, 5, 5]), 10, '');
});