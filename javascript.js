movingCircle.onmousedown = function(event) {

    let shiftX = event.clientX - movingCircle.getBoundingClientRect().left;
    let shiftY = event.clientY - movingCircle.getBoundingClientRect().top;

    movingCircle.style.position = 'absolute';
    movingCircle.style.zIndex = 1000;
    document.body.append(movingCircle);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        movingCircle.style.left = pageX - shiftX + 'px';
        movingCircle.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    movingCircle.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        movingCircle.onmouseup = null;
    };

};

movingCircle.ondragstart = function() {
    return false;
}

const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => {
    submitButton.disabled = true
    e.preventDefault()
    window.location.href = window.location.origin + '/success.html'
})