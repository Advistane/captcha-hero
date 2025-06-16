/**
 * Darude - Sandstorm
 * Note track for a Guitar Hero-style rhythm game.
 * (4-Lane, Keyboard-Friendly Version)
 *
 * This self-contained file generates the note track and exposes the
 * `darudeSandstormTrack` object globally.
 *
 * How to Use:
 * 1. Save this file as `sandstorm.js`.
 * 2. Include it in your HTML: `<script src="sandstorm.js"></script>`
 * 3. Access the notes in your main game script: `const notes = darudeSandstormTrack.notes;`
 *
 * Tempo: The timing has been adjusted for keyboard playability. Notes are now
 * eighth notes. A 4/4 measure (4 beats) is represented by a time value of 2.0.
 * An 8th note has a duration of 0.25.
 *
 * Lanes: (Adjusted for 4 lanes)
 * - Lane 1: B4
 * - Lane 2: C5
 * - Lane 3: D5 (The main repeating note)
 * - Lane 4: F#5 / G5
 */
const darudeSandstormTrack = (() => {
	// This is an IIFE (Immediately Invoked Function Expression) to keep
	// helper functions and variables out of the global scope.
	const track = {
		// You can add other song metadata here if needed
		name: 'Sandstorm',
		artist: 'Darude',
		bpm: 136, // The original BPM is maintained for reference
		notes: [],
	};

	// --- Song Generation Logic ---

	let currentTime = 1.0; // Start time for the first note
	const eighthNoteDuration = 0.2; // Slower tempo using 8th notes

	/**
	 * A helper function to add a series of notes to the main track.
	 * This function is private to the IIFE.
	 * @param {string} pitch - The musical pitch of the note (e.g., 'C4').
	 * @param {number} lane - The lane the note should appear in.
	 * @param {number} count - The number of notes to add in sequence.
	 */
	function addNoteSequence(pitch, lane, count) {
		for (let i = 0; i < count; i++) {
			track.notes.push({
				time: parseFloat(currentTime.toFixed(4)),
				lane: lane,
				pitch: pitch,
			});
			currentTime += eighthNoteDuration;
		}
	}

	/**
	 * The main riff is composed of two distinct measures (patterns) that repeat.
	 * This function is also private to the IIFE.
	 */
	function addMainRiff() {
		// Note counts are halved to match the 8th note timing.
		// Pattern 1: D D D D G G F# F#
		addNoteSequence('B4', 1, 5);
		addNoteSequence('B4', 1, 7); // Was lane 5
		addNoteSequence('E5', 3, 5);
		addNoteSequence('D5', 2, 5);
		addNoteSequence('A4', 0, 2);
		addNoteSequence('B4', 1, 12);
		addNoteSequence('E5', 3, 2);
		addNoteSequence('B4', 1, 12);
		addNoteSequence('E5', 3, 2);
		addNoteSequence('B4', 1, 12);
		addNoteSequence('E5', 3, 7);
		addNoteSequence('D5', 2, 5);
		addNoteSequence('A4', 0, 2);
		addNoteSequence('B4', 1, 12);
		addNoteSequence('E5', 3, 2);
		addNoteSequence('B4', 1, 12);
		addNoteSequence('E5', 3, 2);
	}

	// --- Build the Song Structure (with adjusted note counts) ---
	addMainRiff();

	// Return the final track object, which will be assigned to `darudeSandstormTrack`.
	return track;
})();

// Example of how to access the notes from another script:
// const notes = darudeSandstormTrack.notes;
// console.log(`Generated ${notes.length} notes for the track.`);
// console.log(notes.slice(0, 10)); // Log the first 10 notes
