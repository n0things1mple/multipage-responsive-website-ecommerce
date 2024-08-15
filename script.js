var bttbutton = document.getElementById("backtotop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    bttbutton.style.display = "block";
  } else {
    bttbutton.style.display = "none";
  }
}

// 当用户点击按钮时，返回顶部
bttbutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
