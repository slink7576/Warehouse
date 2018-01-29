function messSucc(text) {
    var alertobj = document.getElementById("alertbar");
    alertobj.style.backgroundColor = "Darkgreen";
    alertobj.style.borderColor = "Darkgreen";
    alertobj.innerText = text;
    alertobj.style.display = "block";
    setTimeout(function () {
        alertobj.style.display = "none";
    }, 4000
    );
}
function messBad(text) {
    var alertobj = document.getElementById("alertbar");
    alertobj.style.backgroundColor = "Darkred";
    alertobj.style.borderColor = "Darkred";
    alertobj.innerText = text;
    alertobj.style.display = "block";
    setTimeout(function () {
        alertobj.style.display = "none";
    }, 4000
    );
}