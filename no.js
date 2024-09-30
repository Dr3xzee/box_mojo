document.getElementById('loaddata').addEventListener('click', getData);
// AJAX function for getting data from the file...
function getData() {
 const req = new XMLHttpRequest();
 const url = "https://cpe-web-assignments.ucdavis.edu/remotedata/index.php";
 req.onreadystatechange = function () {
 useResponse(req);
 };
 req.open("GET", url, true);
 req.send(null);
}