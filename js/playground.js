function noteFromPitch( frequency ) {
    var noteNum = 12 * (Math.log( frequency / 65.41	 )/Math.log(2) );
    return Math.round( noteNum );
}

console.log(noteFromPitch(65.41))