import {React, WeatherStore} from '@api'
import "./TemparatureView.css"

export const TemperatureView = ({store}: { store?: WeatherStore }) => {
  return (
    <>
      <div className={'root'}>
        <div className={'temparature'}>
          {store?.temparature} &#8451;
        </div>
        <div className={'city'}>{store?.city}</div>
      </div>
    </>
  )
}