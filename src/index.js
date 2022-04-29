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
    alert("complete");
  });

  console.log(completeButton);

  // add delete button

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // after pushing, remove tag
    const deleteTarget = deleteButton.parentElement.parentElement;

    document.getElementById("uncompleted-list").removeChild(deleteTarget);
  });

  console.log(deleteButton);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // add node under <ul>
  document.getElementById("uncompleted-list").appendChild(li);
  console.log(document.getElementById("uncompleted-list"));
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
