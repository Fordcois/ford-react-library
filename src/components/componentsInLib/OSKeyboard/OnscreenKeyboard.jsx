import { useState,useEffect } from "react";
import OSKeyboardLetter from "./OsKeyboardKey";
import './OnscreenKeyboard.css'

const  OnscreenKeyboard= () => {

const [userinput,setuserinput] = useState("Hello")

// The Below Code if for accepting real keyboard inputs
const [pressedKeys,setPressedKeys] = useState({})

useEffect(() => {
  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    // Places keypresses into Array for styling to mimic keystokres
      setPressedKeys(prev => ({ ...prev, [key]: true }));
      setTimeout(() => {
        setPressedKeys(prev => ({ ...prev, [key]: false }));
      }, 100);
    // If a Letter
    if (/^[A-Z]$/.test(key)) 
      {TypeFunc(key)}
    // If Backspace
    if(key ==='BACKSPACE'){
        TypeFunc('DEL')
    }};

window.addEventListener('keydown', handleKeyDown);
return () => {window.removeEventListener('keydown', handleKeyDown);};}
);

const TypeFunc =(letter)=>{
    if (letter ==="DEL")
        {setuserinput(userinput.slice(0, -1))}
    else 
        {setuserinput(userinput+letter)}
};

return (
<div>
    <div className="Title">
        User Input:
    </div>
    <div className="text-input-area">
        {userinput}
    </div>

{/* KeyBoard Below */}
<div className="keyboard-Container">
    <div className="keyboard-row">
        <OSKeyboardLetter letter={'Q'} TypeFunc={TypeFunc} pressed={pressedKeys['Q']} />
        <OSKeyboardLetter letter={'W'} TypeFunc={TypeFunc} pressed={pressedKeys['W']} />
        <OSKeyboardLetter letter={'E'} TypeFunc={TypeFunc} pressed={pressedKeys['E']} />
        <OSKeyboardLetter letter={'R'} TypeFunc={TypeFunc} pressed={pressedKeys['R']} />
        <OSKeyboardLetter letter={'T'} TypeFunc={TypeFunc} pressed={pressedKeys['T']} />
        <OSKeyboardLetter letter={'Y'} TypeFunc={TypeFunc} pressed={pressedKeys['Y']} />
        <OSKeyboardLetter letter={'U'} TypeFunc={TypeFunc} pressed={pressedKeys['U']} />
        <OSKeyboardLetter letter={'I'} TypeFunc={TypeFunc} pressed={pressedKeys['I']} />
        <OSKeyboardLetter letter={'O'} TypeFunc={TypeFunc} pressed={pressedKeys['O']} />
        <OSKeyboardLetter letter={'P'} TypeFunc={TypeFunc} pressed={pressedKeys['P']} />
    </div>
    <div className="keyboard-row">
        <OSKeyboardLetter letter={'A'} TypeFunc={TypeFunc} pressed={pressedKeys['A']} />
        <OSKeyboardLetter letter={'S'} TypeFunc={TypeFunc} pressed={pressedKeys['S']} />
        <OSKeyboardLetter letter={'D'} TypeFunc={TypeFunc} pressed={pressedKeys['D']} />
        <OSKeyboardLetter letter={'F'} TypeFunc={TypeFunc} pressed={pressedKeys['F']} />
        <OSKeyboardLetter letter={'G'} TypeFunc={TypeFunc} pressed={pressedKeys['G']} />
        <OSKeyboardLetter letter={'H'} TypeFunc={TypeFunc} pressed={pressedKeys['H']} />
        <OSKeyboardLetter letter={'J'} TypeFunc={TypeFunc} pressed={pressedKeys['J']} />
        <OSKeyboardLetter letter={'K'} TypeFunc={TypeFunc} pressed={pressedKeys['K']} />
        <OSKeyboardLetter letter={'L'} TypeFunc={TypeFunc} pressed={pressedKeys['L']} />
    </div>
    <div className="keyboard-row">
        <OSKeyboardLetter letter={'Z'} TypeFunc={TypeFunc} pressed={pressedKeys['Z']} />
        <OSKeyboardLetter letter={'X'} TypeFunc={TypeFunc} pressed={pressedKeys['X']} />
        <OSKeyboardLetter letter={'C'} TypeFunc={TypeFunc} pressed={pressedKeys['C']} />
        <OSKeyboardLetter letter={'V'} TypeFunc={TypeFunc} pressed={pressedKeys['V']} />
        <OSKeyboardLetter letter={'B'} TypeFunc={TypeFunc} pressed={pressedKeys['B']} />
        <OSKeyboardLetter letter={'N'} TypeFunc={TypeFunc} pressed={pressedKeys['N']} />
        <OSKeyboardLetter letter={'M'} TypeFunc={TypeFunc} pressed={pressedKeys['M']} />
        <OSKeyboardLetter letter={'DEL'} TypeFunc={TypeFunc} pressed={pressedKeys['BACKSPACE']}/>
    </div>

</div>
</div>
)
};

export default OnscreenKeyboard;
