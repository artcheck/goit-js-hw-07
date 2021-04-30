/*
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

*/
const input = document.getElementById("validation-input");
const valInput = document.getElementById('#validation - input.valid');
const invalInput = document.getElementById('#validation - input.invalid');

if (input.querySelector.(data - length) <= input) {
    return valInput;
}
else {
    return invalInput;
}