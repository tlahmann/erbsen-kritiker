const solution = {
    "dd_1":"drag-bf47",
    "dd_2":"drag-d440",
    "dd_3":"drag-a6aa",
    "dd_4":"drag-d8ee",
    "dd_5":"drag-f42d",
    "dd_6":"drag-eacf",
    "dd_7":"drag-c864",
    "dd_8":"drag-e578",
    "dd_9":"drag-a961",
    "dd_10":"drag-ac39",
    "dd_11":"drag-aa44"
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
    check(ev.target.id, data);
}


function check(targetID, dropID) {
    var d = document.getElementById(dropID);
    if (solution[targetID] == dropID) {
        d.className += " correct";
    } else {
        d.className += " wrong";
    }
}