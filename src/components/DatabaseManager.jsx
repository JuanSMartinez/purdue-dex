import '../style/DatabaseManager.css'

function DatabaseManager(){

    return (
        <div className='DatabaseManager pokedex-panel'>
            <h2>
                Database Management
                <button className='pokedex-button' onClick={ShowInstructions}><b>?</b></button>
            </h2>
            <label>
                <b>Team name in DB:</b> <input name='team_name'></input>
            </label>
            <button className='pokedex-button'><b>Create</b></button>
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