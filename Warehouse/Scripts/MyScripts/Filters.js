function RemoveFiltered() {
    var rowsname = $(".tableprice");
    var i;
    for (i = 0; i < rowsname.length; i++) {
        rowsname[i].classList.remove("filtered");
    }
    rowsname = $(".tablelist");
    var i;
    for (i = 0; i < rowsname.length; i++) {
        rowsname[i].classList.remove("filtered");
    }
}
function SortByPrice() {
    Loader();
    var rowsname = $(".tableprice");
    var o;
    var filtered = false;
    for (o = 0; o < rowsname.length; o++) {
        if (getComputedStyle(rowsname[o].parentElement).getPropertyValue("display") != "none") {
            filtered = true;
            rowsname[o].classList.add("filtered");

        }
    }
    if (filtered == true) {
        var rowsname = $(".filtered");
        var i, j;
        

        for (j = 0; j < rowsname.length; j++) {

            for (i = 0; i < rowsname.length - 1; i++) {
                rowsname = $(".filtered");

                if (parseInt(rowsname[i].innerText) > parseInt(rowsname[i + 1].innerText)) {

                    var temp = rowsname[i].parentElement.outerHTML;
                    rowsname[i].parentElement.outerHTML = rowsname[i + 1].parentElement.outerHTML;

                    rowsname[i + 1].parentElement.outerHTML = temp;



                }
            }
        }
        RemoveFiltered();
    }
    else {
        var i, j;
        
        for (j = 0; j < rowsname.length; j++) {

            for (i = 0; i < rowsname.length - 1; i++) {
                rowsname = $(".tableprice");

                if (rowsname[i].innerText > rowsname[i + 1].innerText && getComputedStyle(rowsname[i].parentElement).getPropertyValue("display") == "table-row" && getComputedStyle(rowsname[i + 1].parentElement).getPropertyValue("display") == "table-row") {

                    var temp = rowsname[i].parentElement.innerHTML;
                    rowsname[i].parentElement.innerHTML = rowsname[i + 1].parentElement.innerHTML;
                    rowsname[i + 1].parentElement.innerHTML = temp;
                }
            }
        }
    }

}
function SortByName() {
    Loader();
    var rowsname = $(".tablelist");
    var o;
    var filtered = false;
    for (o = 0; o < rowsname.length; o++) {
        if (getComputedStyle(rowsname[o].parentElement).getPropertyValue("display") != "none") {
            filtered = true;
            rowsname[o].classList.add("filtered");

        }
    }
    if (filtered == true) {
        var rowsname = $(".tablelist");
        var i, j;
       

        for (j = 0; j < rowsname.length; j++) {

            for (i = 0; i < rowsname.length - 1; i++) {
                rowsname = $(".filtered");

                if (rowsname[i].innerText[0] > rowsname[i + 1].innerText[0]) {

                    var temp = rowsname[i].parentElement.outerHTML;
                    rowsname[i].parentElement.outerHTML = rowsname[i + 1].parentElement.outerHTML;


                    rowsname[i + 1].parentElement.outerHTML = temp;


                }
            }
        }
        RemoveFiltered();
    }
    else {
        var i, j;
        
        for (j = 0; j < rowsname.length; j++) {

            for (i = 0; i < rowsname.length - 1; i++) {
                rowsname = $(".tablelist");

                if (rowsname[i].innerText[0] > rowsname[i + 1].innerText[0] && getComputedStyle(rowsname[i].parentElement).getPropertyValue("display") == "table-row" && getComputedStyle(rowsname[i + 1].parentElement).getPropertyValue("display") == "table-row") {

                    var temp = rowsname[i].parentElement.innerHTML;
                    rowsname[i].parentElement.innerHTML = rowsname[i + 1].parentElement.innerHTML;
                    rowsname[i + 1].parentElement.innerHTML = temp;
                }
            }
        }
    }
}
function Refresh() {
    RemoveFiltered();
    Loader();
    var rows = $(".tablelist");
    for (i = 0; i < rows.length; i++) {

        rows[i].parentElement.style.display = "table-row";
        rows[i].parentElement.classList.remove("hidden");

    }
}
function InitializeSearch() {
    Refresh();
    Loader();
    var rows;
    var prices;
    var dates;
    var editeddate;
    rows = $(".tablelist");

    if ($("#searchprice").val() != undefined) {
        prices = $(".tableprice");
    }
    if ($("#searchdate").val() != undefined) {
        editeddate = $("#searchdate").val().split("-")[2] + "." + $("#searchdate").val().split("-")[1] + "." + $("#searchdate").val().split("-")[0];
        dates = $(".tabledate");
    }

    var i;


    for (i = 0; i < rows.length; i++) {

        if (rows[i].innerText != $("#searchname").val() && $("#searchname").val() != "") {
            rows[i].parentElement.style.display = "none";


        }
        if (prices[i].innerText != $("#searchprice").val() && $("#searchprice").val() != "") {

            prices[i].parentElement.style.display = "none";

        }
        if (dates[i].innerText != editeddate && $("#searchdate").val() != "") {
            dates[i].parentElement.style.display = "none";


        }




    }




}