var arr = new Array();
document.getElementById('select').onclick = function () {
    var checkboxes = document.getElementsByName('task');
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            arr.add(checkbox.value);
        }
    }
    for (let a of arr) {
        console.log(a);
    }
}
