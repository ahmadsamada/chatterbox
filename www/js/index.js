
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var webview = document.getElementById('webview');
    var url = 'http://192.168.43.241'; // Replace with the URL you want to load
    webview.innerHTML = '<iframe src="' + url + '" frameborder="0" allowfullscreen></iframe>';
}
