var FaderFoxDJ2 = {};

FaderFoxDJ2.init = function () {

}

function value_rot_enc(value) {
    if (value < 64) {
        return value;
    } else {
        return value - 128;
    }
}

FaderFoxDJ2.seekscratch_turn = function (channel, control, value, status, group) {
    engine.setValue(group, 'beatjump', value_rot_enc(value));
}

FaderFoxDJ2.seekscratch_push = function (channel, control, value, status, group) {
    if (value == 0) {
        script.triggerControl(group, 'loop_out', true);
    }
    else {
        script.triggerControl(group, 'loop_in', true);
    }
}

FaderFoxDJ2.seekscratch_pushturn = function (channel, control, value, status, group) {
    var deckNumber = script.deckFromGroup(group);
    engine.setValue(group, 'beatjump', value_rot_enc(value) * 4);
}

FaderFoxDJ2.pitch_turn = function (channel, control, value, status, group) {
    var rate = engine.getValue(group, "rate")
    engine.setValue(group, 'rate', rate + (0.01 / value_rot_enc(value)));
}

FaderFoxDJ2.pitch_pushturn = function (channel, control, value, status, group) {
    var rate = engine.getValue(group, "rate")
    engine.setValue(group, 'rate', rate + (0.04 / value_rot_enc(value)));
}

FaderFoxDJ2.gain_turn = function (channel, control, value, status, group) {

}

FaderFoxDJ2.gain_pushturn = function (channel, control, value, status, group) {

}