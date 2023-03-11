import '../style/DatabaseManager.css'

function DatabaseManager(){

    return (
        <div className='DatabaseManager'>
            <button className='db-button'><b>Create Team</b></button>
            <button className='db-button'><b>Update Team</b></button>
            <button className='db-button'><b>Read Team </b></button>
            <button className='db-button'><b>Delete Team </b></button>
        </div>
    );
}

export default DatabaseManager;