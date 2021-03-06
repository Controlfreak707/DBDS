function copyCode(elem, containerId) {
  var range = document.createRange();
  range.selectNode(document.getElementById(containerId));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  elem.innerHTML =
    "<i class='fa fa-check-circle' aria-hidden='true'></i> Copied!";

  setTimeout(function () {
    elem.innerHTML = "<i class='fa fa-clipboard' aria-hidden='true'></i> Copy";
  }, 2000);
}
