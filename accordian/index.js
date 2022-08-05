let contentBox = document.getElementsByClassName("contentbox");
console.log(contentBox);
for (let i = 0; i < contentBox.length; i++) {
  contentBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
