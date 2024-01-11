// import Counter from "./Pembahasan/Counter";
// import Effect from "./Pembahasan
import {useToogle} from "./Pembahasan/Hook/useToogle";
import React, { useState } from 'react';

const Hooks = () => {
 let [label, setLabel] = useState('ON');
 let [lampu, setLampu] = useToogle();

 const style = {
    background: lampu ? 'Yellow' : 'Blue',
    textAlign: 'center',
    height: '400px',
 };

 const saklar = () => {
    setLampu(!lampu);
    setLabel(lampu ? 'OFF' : 'ON');
 };

 return (
    <div style={style}>
      <button onClick={saklar}>{label}</button>
    </div>
 );
};

export default Hooks;