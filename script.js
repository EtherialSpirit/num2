var dialog = document.querySelector('dialog');

document.querySelector('#ok').onclick = function() {


  var position = document.getElementById('horseposition').value;

  //разбиваем позицию фигуры на отдельные значения
  const positionX = (position.split(""))[1];
  const positionY = (position.split(""))[0];

  const positionY1 = parseInt(letterValue(positionY));
  const positionX1 = parseInt(positionX);
  
  const reg = /^[a-h]{1}[1-8]{1}$/;
	
  //помещаем вычисления хода в массив
  var positionArray = [];
  positionArray[0] = [(String.fromCharCode(96 + (positionY1 - 2))) + (positionX1 - 1)];
  positionArray[1] = [(String.fromCharCode(96 + (positionY1 - 2))) + (positionX1 + 1)];
  positionArray[2] = [(String.fromCharCode(96 + (positionY1 + 2))) + (positionX1 - 1)];
  positionArray[3] = [(String.fromCharCode(96 + (positionY1 + 2))) + (positionX1 + 1)];
  positionArray[4] = [(String.fromCharCode(96 + (positionY1 - 1))) + (positionX1 - 2)];
  positionArray[5] = [(String.fromCharCode(96 + (positionY1 - 1))) + (positionX1 + 2)];
  positionArray[6] = [(String.fromCharCode(96 + (positionY1 + 1))) + (positionX1 - 2)];
  positionArray[7] = [(String.fromCharCode(96 + (positionY1 + 1))) + (positionX1 + 2)];

	//в цикле проверяем регулярным выражением подходит ли нам вычисление хода
  for (var i = 0; i < positionArray.length; i++) {
    var str = String(positionArray[i]);

    var clean = str.search(reg);
    if (clean == -1) {
      positionArray[i] = '';
    }
  }
  var positionArrayFinal = positionArray.filter(element => element !== '');

	//меняем разделители "," на пробел и выводим информацию в верхнем регистре. 
  document.getElementById('result').innerHTML = positionArrayFinal.join(' ').toUpperCase();

  dialog.show();

};

document.querySelector('#close').onclick = function() {
  dialog.close();
};

function letterValue(str) {
  var anum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  }
  if (str.length == 1) return anum[str] || ' ';
  return str.split('').map(letterValue);
}
