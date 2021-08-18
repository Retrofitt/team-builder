
import './App.css';
import React, {useState} from 'react';
import Form from './Components/Form'


const initialTeamValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {

  const [team, setTeam] = useState([]);

  const [teamValues, setTeamValues] = useState(initialTeamValues)
  
  const updateForm = (inputName, inputValue) => {
    setTeamValues({...teamValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newTeamMember = {
      name: teamValues.name.trim(),
      email: teamValues.email.trim(),
      role: teamValues.role
    }

    setTeam([newTeamMember, ...team])
    
  }
    console.log(team)
  return (
    <div className="App">
      <Form 
        values={teamValues}
        update={updateForm}
        submit={submitForm}
      />
      {team.map(team =>{
        
        return(
          <div>
            <h2>{team.name}</h2>
            <p>E-mail: {team.email}</p>
            <p>Role: {team.role}</p>
          </div>
        )
      })}
    </div>
  )
}

