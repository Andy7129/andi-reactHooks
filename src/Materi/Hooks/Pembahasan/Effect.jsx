import { useEffect, useState } from "react";

const Effect = () => {
    let [text, setText] = useState(' ');
    let [user, setUser] = useState(' ');
    let [seconds, setSeconds] = useState (0);

    console.log('get API');
    useEffect (() => {
        fetch ('https://jsonplaceholder.typicode.com/users/5')
        .then (res => res.json())
        .then (res => setUser(res));
    }, []);



    // useEffect (() => {
    //     setDisplay(() => localStorage.getItem('text'));
    // }, [display]);
    
    useEffect (() => {
            localStorage.setItem('text',text)
            console.log('Singkronisasi');
            return () => {
                console.log ('clean up')
            }
    }, [text]);

    useEffect (() => {
    const interval =setInterval (() => {
            setSeconds(s => s +1);
        }, 1000);


        return () => {
            console.log ('clean up')
            clearInterval(interval);
        };
    },[])

    return (      
      <div>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)} />        
            <p>{user.name}</p>
            {/* <p>{display}</p> */}
            <div>
                Waktu: {Math.floor(seconds / 60)} Menit { seconds % 60 } Detik
            </div>
        </div> 
    )
}

export default Effect;