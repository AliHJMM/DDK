function closePopup() {
    var popupWindow = document.getElementById('popupWindow');
    popupWindow.style.display = 'none';
}
setTimeout(function () {
    var popupWindow = document.getElementById('popupWindow');
    popupWindow.style.display = 'block';
    setTimeout(function () {
        var popupWindow = document.getElementById('popupWindow');
        popupWindow.style.display = 'none';
    }, 15000);
}, 1000);