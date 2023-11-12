// import Counter from "./Pembahasan/Counter";
// import Effect from "./Pembahasan/Effect";
import { useState } from "react";
import {useToogle} from "./Pembahasan/Hook/useToogle";

const Hooks = () => {
let [label, setLabel] = useState ('ON');
let [lampu, setLampu] = useToogle ();
    
    const style = {
        background: lampu ? 'Yellow' : 'Blue',
        textAlign: 'center',
        height: '400px'
    }

    const saklar = () => {
        setLampu(!lampu)
    }

return (
        <div style={style}>
            <button onClick={saklar}>{label}</button>
            </div>
    )
}

export default Hooks;