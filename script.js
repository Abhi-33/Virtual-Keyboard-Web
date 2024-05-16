//Main code for All Buttons to type in the text area
// Select all the buttons
const buttons = document.querySelectorAll('.btn');
const Backspace = document.getElementById('backspace');

// Get the textarea
const textarea = document.getElementById('textarea');
const shiftBtn = document.querySelector('.shift');
const space  = document.getElementById('space');
const tab = document.getElementById('tab');
const Capslock = document.querySelector('#capslock');
const enter = document.querySelector('#enter');
const outputarea = document.querySelector('#textarea2');
// Add event listener to each button

let char = [];
buttons.forEach(btn =>{
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        char = textarea.value.split('')
    })
})


buttons.forEach(button =>{
    button.addEventListener('click' , ()=>{
        const primaryValue = button.querySelector('.secondary-number').innerText;
        btn.textContent.trim().replace(/\D+/g, '');
        textarea.value += primaryValue;
      });
    });
Backspace.addEventListener('click' ,()=>{
    char.pop();
    textarea.value = char.join('');
})

space.addEventListener('click' , ()=>{      
    char.push(' ');
    textarea.value = char.join('');
})

shiftBtn.addEventListener('click' , ()=>{ 
    buttons.forEach(btn=>{
        btn.classList.toggle('upper');
    })  
})

Capslock.addEventListener('click',()=>{
    buttons.forEach(btn=>{
        btn.classList.toggle('upper')
    })
})

tab.addEventListener('click' , ()=>{
    char.push('    ');
    textarea.value = char.join('');
})

enter.addEventListener('click' , ()=>{
   outputarea.value = textarea.value;
})
// textarea.addEventListener('keydown' , (event)=>{

//     //Check if the caps lock key is pressed
//     const isCapsLockOn = event.getModifierState('CapsLock');

//      // If the caps lock key is pressed, convert the input text to uppercase or lowercase
// if(isCapsLockOn) {
//     //Get the Current text value 
// const CurrentValue = textarea.value;
// //Convert the text value to uppercase or lowercase
// const newValue = CurrentValue.toLowerCase() === CurrentValue ? CurrentValue.toUpperCase() : CurrentValue.toLowerCase();

// //Set the new Input Value
// textarea.value = newValue;
// }
// })
// caps.addEventListener('click' , ()=>{

//     textarea.value.toUpperCase();

    
    
//     // console.log('capslock clicked');
// })





// document.addEventListener(
//     "keydown",
//     (event) => {
//       const keyName = event.key;
  
//       if (keyName === "Control") {
//         // do not alert when only Control key is pressed.
//         return;
//       }
  
//       if (event.ctrlKey) {
//         // Even though event.key is not 'Control' (e.g., 'a' is pressed),
//         // event.ctrlKey may be true if Ctrl key is pressed at the same time.
//         alert(`Combination of ctrlKey + ${keyName}`);
//       } else {
//         alert(`Key pressed ${keyName}`);
//       }
//     },
//     false,
//   );
  
//   document.addEventListener(
//     "keyup",
//     (event) => {
//       const keyName = event.key;
  
//       // As the user releases the Ctrl key, the key is no longer active,
//       // so event.ctrlKey is false.
//       if (keyName === "Control") {
//         alert("Control key was released");
//       }
//     },
//     false,
//   );