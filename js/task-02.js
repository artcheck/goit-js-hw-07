/*
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/
const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const liArr = ingredients.map((ingredient) => {
    const liElems = document.createElement("li");
    liElems.textContent = ingredient;

    return liElems;
});
ingredientsRef.append(...liArr);