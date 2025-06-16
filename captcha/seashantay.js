/**
 * Sea Shanty 2 - OSRS
 * Note track for a Guitar Hero-style rhythm game.
 * (4-Lane, Keyboard-Friendly Version)
 *
 * This self-contained file generates the note track and exposes the
 * `seaShanty2Track` object globally.
 *
 * How to Use:
 * 1. Save this file as `sea-shanty-2.js`.
 * 2. Include it in your HTML: `<script src="sea-shanty-2.js"></script>`
 * 3. Access the notes in your main game script: `const notes = seaShanty2Track.notes;`
 *
 * Tempo: The timing is based on eighth notes to ensure keyboard playability.
 * An 8th note has a duration of 0.125.
 *
 * Lanes: (Adjusted for 4 lanes, based on the D minor scale)
 * - Lane 1: C4 / D4
 * - Lane 2: E4 / F4
 * - Lane 3: G4 / A4
 * - Lane 4: C5 (High note)
 */
const seaShanty2Track = (() => {
	// IIFE to keep helper functions and variables out of the global scope.
	const track = {
		name: 'Sea Shanty 2',
		artist: 'Ian Taylor',
		bpm: 105, // Approximate BPM for reference
		notes: [],
	};

	// --- Song Generation Logic ---

	let currentTime = 1.0; // Start time for the first note
	const shortNoteDuration = 0.35;
	const longNoteDuration = 0.75;

	/**
	 * A helper function to add a single note to the track.
	 * @param {string} pitch - The musical pitch of the note (e.g., 'D4').
	 * @param {number} lane - The lane the note should appear in.
	 * @param {number} duration - The duration to advance time after this note.
	 */
	function addNote(pitch, lane, duration) {
		track.notes.push({
			time: parseFloat(currentTime.toFixed(4)),
			lane: lane,
			pitch: pitch,
		});
		currentTime += duration;
	}

	/**
	 * Generates the first main phrase (Part A) of the shanty.
	 */
	function addPartA() {
		// D, A, A, G, G, F, F, E
		addNote('A5', 0, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('C#5', 3, longNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('F#5', 1, shortNoteDuration);
		addNote('G#5', 0, shortNoteDuration);
		addNote('E5', 2, longNoteDuration);

		addNote('F#5', 1, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('B4', 3, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('D5', 3, longNoteDuration);

		addNote('A5', 0, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('C#5', 3, longNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('F#5', 1, shortNoteDuration);
		addNote('D5', 0, longNoteDuration);

		addNote('F#5', 1, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('B4', 3, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('F#5', 1, shortNoteDuration);
		addNote('E5', 2, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('B4', 3, shortNoteDuration);
		addNote('A4', 3, longNoteDuration);

		addNote('C#5', 1, shortNoteDuration);
		addNote('B4', 2, shortNoteDuration);
		addNote('C#5', 1, shortNoteDuration);
		addNote('C#5', 1, shortNoteDuration);
		addNote('C#5', 1, shortNoteDuration);
		addNote('B4', 1, shortNoteDuration);
		addNote('C#5', 1, shortNoteDuration);
		addNote('B4', 1, shortNoteDuration);
		addNote('C#5', 1, longNoteDuration);

		addNote('A4', 3, shortNoteDuration);
		addNote('B4', 1, shortNoteDuration);
		addNote('C#5', 3, shortNoteDuration);
		addNote('D5', 3, shortNoteDuration);
		addNote('C#5', 1, shortNoteDuration);
		addNote('B4', 1, shortNoteDuration);
		addNote('C#5', 3, 1);

		currentTime += shortNoteDuration; // Rest
	}


	addPartA();

	// Return the final track object.
	return track;
})();

// Example of how to access the notes from another script:
// const notes = seaShanty2Track.notes;
// console.log(`Generated ${notes.length} notes for the track.`);
// console.log(notes.slice(0, 10)); // Log the first 10 notes
