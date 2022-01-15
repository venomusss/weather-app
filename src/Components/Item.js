function WeatherItem(props) {
    return (
        <div className="item">
            {props.city &&
                <div>
                    <p className='city'><span className='label'></span> {props.city}, {props.country}</p>
                    <div className='temp'>
                        <p className='real'><span className='label'></span> {props.realTemp} °C</p>
                        <p className='description'>{props.description}</p>
                        <p className='like'><span className='label'>Feels Like:</span> {props.feelTemp} °C</p>
                    </div>
                    <div className='max-min'>
                        <p className='min'><span className='labels'>Min:</span> {props.minTemp} °C</p>
                        <p className='max'><span className='labels'>Max:</span> {props.maxTemp} °C</p>
                    </div>
                    <p className='lower-item'><span className='lower-label'>Pressure:</span> {props.pressure} mm</p>
                    <p className='lower-item'><span className='lower-label'>Humidity:</span> {props.humidity}%</p>
                </div>
            }
            {props.error &&
                <div>
                    <p className='error'>{props.error}</p>
                </div>
            }
        </div>
    );
}

export default WeatherItem;

// {city  &&
// <div>
//     У вас {unreadMessages.length} непрочитаних повідомлень.
// </div>
// }