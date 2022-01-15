function Form({getWeather}) {
    return (
        <div className="Form">
            <form className='form' onSubmit={getWeather}>
                <input className='input' type='text' name='city' placeholder='Enter City'/>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
}

export default Form;