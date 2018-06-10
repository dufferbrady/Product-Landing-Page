function toggleClass(value) {
    var el = document.getElementById("featureTab-" + value);
    console.log(el);
    el.classList.toggle('featureTab-toggle');
}