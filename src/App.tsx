import React , {useState} from 'react';

import './App.css';

const App: React.FC=()=> {

  interface UserInt{
    name:string, 
    age:string, 
    job:string
  }
  interface AllUsersInt{
    currentUser : UserInt;
    allUser: Array<UserInt>
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser:{
      name: "",
      age: "",
      job: ""
    },
    allUser: []
  })

  const onChangeHandler= (event : React.ChangeEvent<HTMLInputElement>) : void => {
    console.log(event.target.value);
    
    setUsersState({
      ...usersState,
      currentUser:{
        ...usersState.currentUser,
        [event.target.name]: event.target.value
      }
    })
  }
    console.log(usersState.currentUser);

    const submitForm = (event: React.SyntheticEvent) : void => {
        event.preventDefault();
        setUsersState({
          currentUser:{
            name:"",
            age:"",
            job:""
          },
          allUser:[
            ...usersState.allUser,
            usersState.currentUser
          ]
        })
    }

    const allUser= usersState.allUser.map((user, i)=>(
      <div key={i}>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
        <h2>{user.job}</h2>
      </div>
    ))
    console.log(usersState);
    

  return (
    <div className="container">
      <h1>React with TypeScript</h1>
      <form onSubmit={submitForm} action="">
        <label htmlFor="userName">Name:</label>
        <input 
        id='userName'
        type="text"
        name='name'
        value={usersState.currentUser.name}
        onChange={onChangeHandler}
        />
        <label htmlFor="userAge">Age:</label>
        <input 
        id='userAge'
        type="number"
        name='age'
        value={usersState.currentUser.age}
        onChange={onChangeHandler}
        />
        <label htmlFor="userJob">job:</label>
        <input 
        id='userJob'
        type="text"
        name='job'
        value={usersState.currentUser.job} 
        onChange={onChangeHandler}
        />

        <button type='submit'>Add User</button>
      </form>
      {allUser}
    </div>
  );
}

export default App;
