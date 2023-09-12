import { useState, useTransition } from "react";

function UserItem({user}){

    let [showInfo, setShowInfo] = useState(false)

    return (
        <li onClick={() => setShowInfo(!showInfo)}>
            {user.name}
            {
                !showInfo ? null : <div><p>Email : {user.email}</p><p>job : {user.job}</p></div>
            }
        </li>
    )
}


function UserList({data}){
    return(
        <ul>
            {
                data.map(item => {
                    return(
                        <UserItem key={item.id} user={item}/>
                    )
                })
            }
        </ul>
    )
}


function App() {
    let data = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]

    return (
    <div>
        <h1>User List</h1>
        <UserList data={data}/>
    </div>
    );
}

export default App;
