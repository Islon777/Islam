/* Задание 1.
1.1 Удалить из массива все четные числа и отсортировать оставшиеся по возрастанию.
 */

// Функция генерации массива с числом элементов numElements и диапазоном целых чисел [minValue,maxValue]
function genArray(numElements, minValue, maxValue) {
    let array1 = [];
    for (let i = 0; i < numElements; i++) {
        array1[i] = minValue - 1 + Math.ceil((maxValue - minValue+1)*Math.random());
    }
    return array1
}
let Mass1 = genArray(20,0,50);
console.log('1.1 Удалить из массива все четные числа и отсортировать оставшиеся по возрастанию.')
console.log('Исходный массив: ', Mass1);

// Функция для сравнения двух чисел (нужна для сортировки по возрастанию/убыванию)
function compareNumbersAscend(a, b) {
    return a - b;
}
function compareNumbersDescend(a, b) {
    return b - a;
}
// Функция проверки на четность и сортировки по возрастанию
function sort1(array) {
    let array1 = [];
    let count1 = -1;
    for (let i = 0; i <= array.length-1; i++) {
        if  (array[i] % 2 !== 0) {
            count1 += 1;
            array1[count1] = array[i];
        }
    }
    console.log('Массив с нечетными элементами', array1)
    return array1
}
Mass1 = sort1(Mass1);
Mass1 = Mass1.sort(compareNumbersAscend);
console.log('Отсрортированный массив: ', Mass1);

/* Задание 1.
1.2 Удалить из массива все нечетные числа и развернуть оставшиеся элементы в обратном порядке.
 */
let Mass2 = genArray(20,0,50);
console.log('1.2 Удалить из массива все нечетные числа и развернуть оставшиеся элементы в обратном порядке.')
console.log('Исходный массив: ', Mass2);

function sort2(array) {
    let array1 = [];
    let count1 = -1;
    for (let i = 0; i <= array.length-1; i++) {
        if  (array[i] % 2 === 0) {
            count1 += 1;
            array1[count1] = array[i];
        }
    }
    console.log('Массив с четными элементами', array1)
    return array1
}
Mass2 = sort2(Mass2);
Mass2 = Mass2.reverse();
console.log('Инвертированный массив: ', Mass2);

/* Задание 1.
1.3 Отсортировать массив: четные элементы по возрастанию, затем нечетные элементы по убыванию
 */
let Mass3 = genArray(20,0,50);
console.log('1.3 Отсортировать массив: четные элементы по возрастанию, затем нечетные элементы по убыванию.')
console.log('Исходный массив: ', Mass3);
Mass3_1 = sort2(Mass3);
Mass3_1 = Mass3_1.sort(compareNumbersAscend);
Mass3_2 = sort1(Mass3);
Mass3_2 = Mass3_2.sort(compareNumbersDescend);
Mass3 = Mass3_1.concat(Mass3_2);
console.log('Отсортированный массив: ', Mass3);