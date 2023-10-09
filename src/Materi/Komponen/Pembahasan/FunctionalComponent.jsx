import { useState } from "react";

const FunctionalComponent = ({kelas}) =>{
    const [value, setValue] = useState (0);

    const handlePlus = () => {
        setValue(value + 1)
    }
        const handleMinus = () => {
            if(value >0){
        setValue(value - 1)
            }

    }

    return (
    <div>
        <p> Ini Belajar Functional component</p>
        <h1> Latihan awal Kelas {kelas}</h1>
        <button onClick={handleMinus}>-</button>
        <span>{' '}{value}</span>
        <button onClick={handlePlus}>+</button>
    </div>
)
}

FunctionalComponent.defaultProps = {
    kelas : '-'
}
export default FunctionalComponent;