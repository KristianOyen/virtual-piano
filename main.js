const frequencies = {
"c1": 261.63,
"c#1": 277.18,
"d1": 293.66,
"d#1": 311.13,
"e1": 329.63,
"f1": 349.23,
"f#1": 369.99,
"g1": 392.00,
"g#1": 415.30,
"a1": 440.00,
"a#1": 466.16,
"b1": 493.88,
"c2": 523.25,
"c#2": 554.37,
"d2": 587.33,
"d#2": 622.25,
"e2": 659.26,
"f2": 698.46,
"f#2": 739.99,
"g2": 783.99,
"g#2": 830.61,
"a2": 880.00,
"a#2": 932.33,
"b2": 987.77,
"c3": 1046.50,
};

keyMap = {};

const wKeys = "zxcvbnmqwertyui";

const wNotes = ["c1", "d1", "e1", "f1", "g1", "a1", "b1", 
            "c2", "d2", "e2", "f2", "g2", "a2", "b2", "c3"];

for (let i = 0; i < wKeys.length; i++) {
    keyMap[wKeys[i]] = wNotes[i];
};

const bKeys = "sdghj23567";
const bNotes = ["c#1", "d#1", "f#1", "g#1", "a#1", "c#2", "d#2", "f#2", "g#2", "a#2"];

for (let i = 0; i < bKeys.length; i++ [
    keyMap[bKeys[i]] = bNotes[i]
};








