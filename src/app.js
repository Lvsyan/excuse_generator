window.onload = function() {
  document.getElementById("excusa").innerHTML = "EL PERRO";
  document.querySelector("#ge").addEventListener("click", () => {
    document.querySelector("#geneex").innerHTML = excusa();
  });
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
const randomNumber = arr => Math.floor(Math.random() * arr.length);
const randomItem = (arr, pos) => arr[pos];
const items = [who, action, what, when];

const excusa = () => {
  return (
    randomItem(who, randomNumber(who)) +
    " " +
    randomItem(action, randomNumber(action)) +
    " " +
    randomItem(what, randomNumber(what)) +
    " " +
    randomItem(when, randomNumber(when))
  );
};
