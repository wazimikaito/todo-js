import "./styles.css";

const onClickAdd = () => {
  // textboxの値を取得し，初期化する．
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグを生成
  const li = document.createElement("li");
  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;
  p.className = "job-name";

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);

  // add complete button

  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    deleteFromUncomplete(deleteButton.parentElement.parentElement);
    // add completed-list
    const addTarget = completeButton.parentElement;

    // get todo text
    const text = addTarget.firstElementChild.innerText;
    console.log(addTarget);
    console.log(text);

    // divを初期化
    addTarget.textContent = null;
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;
    li.appendChild(p);
    addTarget.appendChild(li);
    console.log(addTarget);
    addTarget.className = "list-row";
    document.getElementById("completed-list").appendChild(addTarget);
  });

  // console.log(completeButton);

  // add delete button

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  // after pushing, remove tag
  deleteButton.addEventListener("click", () => {
    deleteFromUncomplete(deleteButton.parentElement.parentElement);
  });

  // console.log(deleteButton);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add node under <ul>
  document.getElementById("uncompleted-list").appendChild(li);
  // console.log(document.getElementById("uncompleted-list"));
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
// remove element
const deleteFromUncomplete = (target) => {
  document.getElementById("uncompleted-list").removeChild(target);
};
