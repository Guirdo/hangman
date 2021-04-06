var letters,error_counter = 0;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var hangman;

$(function () {
    drawGallow();
    $('#string').focus();
    $('#btnRepeat').hide();
});

$('#btnConfirm').on('click', function () {
    hangman = new Hangman(ctx);
    var string = $('#string').val();
    letters = [].map.call(string, function (char) {
        return { letter: char, finded: char === ' ' ? true : false };
    });

    letters.forEach(e => {
        $('#letter_container').append('<div class="col"><h4 class="' + e.letter + ' letter text-center">' + e.letter + '</h4></div>');
        $('#room_container').append(
            e.letter === ' ' ?
                '<div class="col text-white"><h4>___</h4></div>' :
                '<div class="col"><h4 class="text-center">__</h4></div>'
        );
    });

    $('#string').val('');
    $('#letter').focus();
    $('.letter').hide();
});

$('#btnLetter').on('click', function () {
    var letter = $('#letter').val();

    if (letters.find(e => e.letter === letter) != null) {
        letters.find(function (e) {
            if (e.letter === letter) {
                e.finded = true;
            }
        });
        $('.' + letter).show(500);
        isWon();
    } else {
        $('#bad_letters').append(letter + ' ');
        error_counter++;
        drawHangman();
    }

    $('#letter').focus();
    $('#letter').val('');
});

$('#btnRepeat').on('click', function () {
    $('#bad_letters').html('');
    $('#letter_container').html('');
    $('#room_container').html('');
    $('#btnRepeat').hide();

    window.location.href = "index.html";
});

function isWon() {
    if (letters.find(e => !e.finded) == null) {
        alert('You win');
        $('#btnRepeat').show(1000);
        letters = [];
    }
}

function isFallen(){
    alert('You lose!');
    $('#btnRepeat').show(1000);
    letters = [];
}

function drawHangman(){
    switch(error_counter){
        case 1:
            drawRope();
            break;
        case 2:
            ctx.strokeStyle = '#000000';
            hangman.drawHead();
            break;
        case 3:
            hangman.drawBody();
            break;
        case 4:
            hangman.drawLeftLeg();
            break;
        case 5:
            hangman.drawRightLeg();
            break;
        case 6:
            hangman.drawRightArm();
            break;
        case 7:
            hangman.drawLeftArm();
            isFallen();
            break;
    }
}

function drawGallow() {
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 8;

    drawLine(20,400,200,400);
    drawLine(100,400,100,50);
    drawLine(100,50,350,50);
}

function drawRope() {
    ctx.strokeStyle = '#FFC433';
    drawLine(350,50,350,80);
}

function drawLine(x1,y1,x2,y2){
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
}
