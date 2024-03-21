// Стандарт кодирования airbnb, рекомендует
// использовать, по возможности, одинарные
console.log("Dracarys!");

console.log("Dragon's mother");

// Экранируется только ", так как в этой ситуации
// двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\"");
// => Dragon's mother said "No"

// Обратный слеш `\` не выводится, если после него идет обычный символ,
// а не специальный
console.log("Death is \so terribly final, while life is full of possibilities");
// => Death is so terribly final, while life is full of possibilities

console.log("\\");
// => \

console.log("\\ \\ \\\\ \\\ \'\"");

console.log('- Are you hungry?\n- Aaaarrrgh!');

// Мы это не изучали, но вы должны знать правду
// Ниже код, который возвращает длину строки
'a'.length;    // 1
'\n'.length;   // 1 !!!
'\n\n'.length; // 2 !!!

console.log('Gregor Clegane\nDunsen\nPolliver\nChiswyck');

console.log('\n');
console.log('Dunsen');
// =>
// =>
// => Dunsen

console.log('Joffrey loves using \\n');
// => Joffrey loves using \n

// Оператор такой же, как и при сложении чисел
// но здесь он имеет другой смысл (семантику)
console.log('Dragon' + 'stone');
// => Dragonstone

console.log('Kings' + 'wood');     // => Kingswood

// Обратный порядок слов
console.log('road' + 'Kings');     // => roadKings

// Конкатенировать можно абсолютно любые строки
console.log("King's" + 'Landing'); // => King'sLanding

// Оба способа равнозначны

// Ставим пробел в левой части
console.log("King's " + 'Landing'); //  => King's Landing
// Ставим пробел в правой части
console.log("King's" + ' Landing'); //  => King's Landing

console.log("King's " + ' Landing');   // => King's  Landing

console.log("King's  " + '  Landing'); // => King's    Landing