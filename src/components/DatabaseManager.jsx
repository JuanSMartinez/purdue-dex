import '../style/DatabaseManager.css'

function DatabaseManager(){

    return (
        <div className='DatabaseManager pokedex-panel'>
            <h2>
                Database Management Disabled
                <button className='pokedex-button' onClick={ShowInformation}><b>?</b></button>
            </h2>
        </div>
    );
}

function ShowInformation(){
    const message = `
    This panel contains Firebase database capabilities only on the main branch of the project.
    Please checkout the main branch and run the application again if you wish to use this panel.
    `
    alert(message);
}

export default DatabaseManager;