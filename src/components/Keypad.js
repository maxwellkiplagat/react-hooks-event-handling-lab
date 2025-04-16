// Code Keypad Component Here

function Keypad (){

    return (
        <div>
            <input type="password" name="password" id="passcode" onChange={()=>console.log('Entering password...') } />
        </div>
    )
}

export default Keypad;