/* eslint-disable react/prop-types */ 
const OSKeyboardLetter = ({letter,TypeFunc,pressed}) => {

    return (
<button className={pressed ? 'hitkeyboardLetter' : 'KeyboardLetter'} onClick={()=> {TypeFunc(letter)}}>
    {letter}
</button>
    );
    }

    
    
    export default OSKeyboardLetter;