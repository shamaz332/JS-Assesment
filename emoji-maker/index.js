
function changeSkinYellow() {
    document.getElementById('skin').src = './assets/skin/yellow.png'
}
function changeSkinGreen() {
    document.getElementById('skin').src = './assets/skin/green.png'
}

function changeSkinRed() {
    document.getElementById('skin').src = './assets/skin/red.png'
}
function changeEyeNormal() {
    document.getElementById('eyes').src = './assets/eyes/normal.png'
}
function changeEyeClosed() {
    document.getElementById('eyes').src = './assets/eyes/closed.png'
}
function changeEyeLong() {
    document.getElementById('eyes').src = './assets/eyes/long.png'
}
function changeEyelaughing() {
    document.getElementById('eyes').src = './assets/eyes/laughing.png'
}
function changeEyerolling() {
    document.getElementById('eyes').src = './assets/eyes/rolling.png'
}
function changeEyewinking() {
    document.getElementById('eyes').src = './assets/eyes/winking.png'
}
function mouthOpen() {
    document.getElementById('mouth').src = './assets/mouth/open.png'
}
function mouthSmiling() {
    document.getElementById('mouth').src = './assets/mouth/smiling.png'
}
function mouthStraight() {
    document.getElementById('mouth').src = './assets/mouth/straight.png'
}
function mouthSad() {
    document.getElementById('mouth').src = './assets/mouth/sad.png'
}

function mouthTeeth() {
    document.getElementById('mouth').src = './assets/mouth/teeth.png'
}

// Card Steps navigation


function showEyeCard() {
    document.getElementById('select-skin-card').style.display = 'none';
    document.getElementById('select-eyes-card').style.display = 'block';
}
function showEyeCardPrev() {
    document.getElementById('select-skin-card').style.display = 'block';
    document.getElementById('select-eyes-card').style.display = 'none';
}
function showMouthCard() {
    document.getElementById('select-skin-card').style.display = 'none';
    document.getElementById('select-eyes-card').style.display = 'none';
    document.getElementById('select-mouth-card').style.display = 'block';
}
function showMouthCardPrev() {
    document.getElementById('select-skin-card').style.display = 'none';
    document.getElementById('select-eyes-card').style.display = 'block';
    document.getElementById('select-mouth-card').style.display = 'none';
}