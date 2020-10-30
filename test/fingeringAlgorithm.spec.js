var db = require('../src/Algorithms/FingeringAlgorithm.js')

describe('|Fingering Algorithm|', function () {
  it('should put finger data', function () {

    var midiData = require('./midi_2')

    const newMidiData = midiData.map(d => {
      return [
        {
          'ticksToEvent': d.tick,
          'event': {
            'deltaTime': d.tick,
            'channel': d.channel,
            'type': 'channel',
            'noteNumber': d.noteNumber,
            'velocity': d.velocity,
            'subtype': (d.name === 'Note on') ? 'noteOn' : 'noteOff',
          },
          'track': 0,
        },
        5555];
    }
  );

    const result = db.FingeringAlgorithm(newMidiData)

    console.log(result)

  })
})
