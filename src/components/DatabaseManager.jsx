import '../style/DatabaseManager.css'
import { database } from '../database.js';
import { set, update, onValue, remove, ref } from 'firebase/database';
import { useState } from 'react';

function DatabaseManager({ chosenTeam }){
    const [teamName, setTeamName] = useState('');

    // Handle a change in the team name due to the input
    function handleInputChange(event){
        setTeamName(event.target.value);
    }

    // Create a new team with the name give
    function createNewTeam(){
        if (teamName === '' || teamName.includes(' ')){
            alert('Please enter a team name without spaces');
            return;
        }
        if(!chosenTeam || chosenTeam.every(element => element === null)) {
            alert('Cannot save an empty team. Make some selections first by clicking on Pokemon and then "Add to Team"');
            return;
        }

        let data = {
            created_on: (new Date()).toISOString(),
            pokemon: chosenTeam
        }
        const dataRef = ref(database, `/teams/${teamName}`);
        // Check if the team already exists. After the query is complete, create the data if it didn't exist 
        onValue(dataRef, (snapshot) => {
            if (snapshot.val() !== null) {
                alert(`A team by the same name already exists in the database. Use the Update button if you wish to update it.`
                );
                return;
            }
            // Set the data
            set(dataRef, data)
            .then(alert(`Pokemon team "${teamName}" was saved to the database!`))
            .catch(error => {
                alert("Failed to create team. See log for details");
                console.log(error);
            });

        }, {onlyOnce: true});
        
    }


    return (
        <div className='DatabaseManager pokedex-panel'>
            <h2>
                Database Management
                <button className='pokedex-button' onClick={ShowInstructions}><b>?</b></button>
            </h2>
            <label>
                <b>Team name in DB:</b> <input name='team_name' onChange={handleInputChange}></input>
            </label>
            <button className='pokedex-button' onClick={createNewTeam}><b>Create</b></button>
            <button className='pokedex-button'><b>Update</b></button>
            <button className='pokedex-button'><b>Read </b></button>
            <button className='pokedex-button'><b>Delete</b></button>
        </div>
    );
}

function ShowInstructions(){
    const message = `
    This panel allows you to store and maintain your team of Pokemon in a Firebase databse.
    Create: Save your selected team as a new team on the database by the given name.
    Update: Update an existing team on the database with your selection of Pokemon.
    Read: Read an existing team from the database by its name. The Pokemon in the team will be shown in the selections on the left.
    Delete: Delete an existing team from the database.
    `
    alert(message);
}

export default DatabaseManager;