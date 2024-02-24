function changeRange() {
    var width = 500;
    var percent = document.getElementById("range-slider-input").value / 10;
    if (percent > 95) percent -= 5;
    if (percent < 5) percent += 5;
    document.getElementById("range-fill").style.width = percent + "%";
}
document.onload = changeRange();

//# sourceMappingURL=index.c36f364e.js.map
