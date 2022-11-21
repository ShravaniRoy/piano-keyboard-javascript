const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const allkeys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

allkeys.forEach(key => {
  //adding event listener for click event  
  key.addEventListener('click', () => playNoteSound(key)); 
})

//function to play the sound of key
function playNoteSound(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}

//adding event listener for key down from keyboard
document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
  
    if (whiteKeyIndex > -1) playNoteSound(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNoteSound(blackKeys[blackKeyIndex]);
  })