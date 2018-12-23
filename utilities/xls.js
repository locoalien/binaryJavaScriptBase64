function saveAsXlsxFile() {
    var pre = "data:application/vnd.ms-excel,";
    var inp = document.getElementById('base64input');
    var anchor = document.getElementById('stuff');
    anchor.href = pre + inp.value;
    anchor.style.display = "block";
}