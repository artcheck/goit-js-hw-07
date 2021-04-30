/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

*/
const btnRef = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  spanValue: document.querySelector("#value"),
};

let counter = +btnRef.spanValue.textContent;

btnRef.btnDecrement.addEventListener("click", (event) => {
  counter -= 1;
  console.log(event);

  btnRef.spanValue.textContent = counter;
});

btnRef.btnIncrement.addEventListener("click", (event) => {
  counter += 1;
  console.log(event);
  btnRef.spanValue.textContent = counter;
});
