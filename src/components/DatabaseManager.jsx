import '../style/DatabaseManager.css'

function DatabaseManager(){

    return (
        <div className='DatabaseManager pokedex-panel'>
            <label>
                Team Name: <input name='team_name'></input>
            </label>
            <button className='pokedex-button'><b>Create Team</b></button>
            <button className='pokedex-button'><b>Update Team</b></button>
            <button className='pokedex-button'><b>Read Team </b></button>
            <button className='pokedex-button'><b>Delete Team </b></button>
        </div>
    );
}

export default DatabaseManager;