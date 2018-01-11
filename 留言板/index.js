var No = 0;

function savedata() {
    var date = new Date();
    var number = date.getTime();

    var msg = document.getElementById("liuyanban").value;
    localStorage.setItem(number, msg);
    // var li=document.createElement("li")
    document.getElementById("zhaungtailan").appendChild(document.createElement("li"));
    var cach = document.getElementById("zhaungtailan").getElementsByTagName("li");
    cach[No].innerHTML = (No + "&nbsp&nbsp&nbsp&nbsp" + msg + '*****' + date.toLocaleString());
    No++;

}

function loaddata() {
    for (i = 0; i < localStorage.length; i++) {
        document.getElementById("zhaungtailan").appendChild(document.createElement("li"));
        var cach = document.getElementById("zhaungtailan").getElementsByTagName("li");
        var num = i + 1;
        var date = new Date();
        date.setTime(localStorage.key(i)).toLocaleString();
        var time1 = date;

        cach[i].innerHTML = (num + "&nbsp&nbsp&nbsp&nbsp" + localStorage.getItem(i) + '*****' + time1);

    }

}

function cleardata() {
    localStorage.clear();
}

function resetinput() {
    document.getElementById("liuyanban").innerHTML = "";
}

function clicktextarea() {
    var detail = document.getElementById("liuyanban");
    if (detail.innerHTML == "请输入内容...") {
        detail.innerHTML = "";
        detail.style.color="black";
    }
    else {
    }
}