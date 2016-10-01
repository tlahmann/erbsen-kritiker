var solution = {
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

function drag(elem) {
    $(elem).css('background-color', 'rgba(250, 250, 0, 0.25)');
}

function drop(elem) {
    console.log("dropped");
    check(elem)
}


function check(e) {
    $(solution[$(e).id]).position();
    $.each(solution, function (key, value) {
        if (value === $(e).attr('id')) {
            var p = $("#"+key).position();
            var q = $(e).position();
            if (q.top >= p.top - 13 && q.top <= p.top + 20 && q.left >= p.left - 10 && q.left <= p.left + 25){
                $(e).css('background-color', 'rgba(0, 250, 0, 0.25)');
            } else {
                $(e).css('background-color', 'rgba(250, 0, 0, 0.25)');
            }
        }
    });
}

$('#drag-ac39').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-a6aa').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-c864').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-d440').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-f42d').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-aa44').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-d8ee').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-eacf').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-bf47').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-a961').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});

$('#drag-e578').draggable({
    start: function() {
        drag(this);
    },
    stop: function() {
        drop(this);
    }
});
