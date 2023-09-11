import React, { useState } from 'react'
import Login from './Components2/Login';
import Homepage from './Components2/Homepage'

export default function App3() {

    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
      }

    
    const [isConfirmed, setIsConfirmed] = useState(false);


    return (
        <div>
        {
            !isConfirmed? <Login user={user} isConfirmed={isConfirmed} setIsConfirmed={setIsConfirmed}/> : <Homepage/>
        }
        </div>

    );
}