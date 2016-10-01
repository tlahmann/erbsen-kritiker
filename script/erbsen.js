const solution = {
    s1:"drag-bf47",
    s2:"drag-d440",
    s3:"drag-a6aa",
    s4:"drag-d8ee",
    s5:"drag-f42d",
    s6:"drag-eacf",
    s7:"drag-c864",
    s8:"drag-e578",
    s9:"drag-a961",
    s10:"drag-ac39",
    s11:"drag-aa44"
} // dont cheat!

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    check(data);
}


function check(dropID) {
    var d = document.getElementById(dropID);
    d.className += " correct";
    d.className += " wrong";
}