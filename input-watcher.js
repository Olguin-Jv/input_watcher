function inputWatcher(id) {
  var input = document.querySelectorAll(id)
  for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("change", checkContent, false);
    input[i].addEventListener("keyup", checkContent, false);
    input[i].addEventListener("focus", checkContent, false);
    input[i].addEventListener("blur", checkContent, false);
    input[i].addEventListener("mousedown", checkContent, false);
  }
}
function checkContent(el) {
  if (el.target.value !== "") {
    el.target.className = "active"
  } else {
    el.target.className = ""
  }
}
