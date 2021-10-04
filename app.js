var totalBeats = 0;
var startTime = Date.now();

var started = false;

var addBeat = function() {

    if (!this.started) {

        document.querySelector('#beats-display').innerText = 'Keep  going!';

        this.started = true;

        document.querySelector('#reset-button').style.display = 'inline-block';
    } else {

        document.querySelector('#bpm').innerText = 'Continue';

        var endTime = Date.now();

        this.totalBeats = this.totalBeats + 1;

        var timeDifference = this.calculateTimeDifference(startTime, endTime);

        this.calculateBPM(timeDifference);
    }
}

var calculateTimeDifference = function(startTime, endTime) {
    return (endTime - startTime) / 1000 / 60;
}

var calculateBPM = function(timeDifference) {
    var bpm = totalBeats / timeDifference;

    document.querySelector('#beats-display').innerText = Math.floor(bpm);
}

var reset = function() {
    this.totalBeats = 0;
    this.started = false;
    document.querySelector('#reset-button').style.display = 'none';
    document.querySelector('#beats-display').innerText = 'Start';
}