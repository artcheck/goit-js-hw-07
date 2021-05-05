/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

*/
const inputRef = document.getElementById("validation-input");
const dataLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('input', valParams)

function valParams(e) {

    if (+dataLength === this.value.length) {
        updateClass('valid', 'invalid');
    } else {
        updateClass('invalid', 'valid');
    }
}

function updateClass(add, remove) {
    inputRef.classList.remove(remove);
    inputRef.classList.add(add);
}