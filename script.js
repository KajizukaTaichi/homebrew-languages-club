// ヒントを表示する要素を取得
const hintElements = document.querySelectorAll(".hint-element");

// カーソルが要素にかざされたら、ヒントを表示する
hintElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    const hintText = element.getAttribute("data-hint");
    // ヒントを表示する処理
    const hintBox = document.createElement("div");
    hintBox.classList.add("hint-box");
    hintBox.textContent = hintText;
    element.appendChild(hintBox);
  });

  element.addEventListener("mouseout", () => {
    // ヒントを非表示にする処理
    const hintBox = element.querySelector(".hint-box");
    if (hintBox) {
      element.removeChild(hintBox);
    }
  });
});
