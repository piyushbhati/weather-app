import {React, WeatherStore} from '@api'
import "./TemparatureView.css"

export const TemperatureView = ({store, className}: { store?: WeatherStore, className?: any }) => {
  return (
    <>
      <div className={`root ${className}`}>
        <div className={'temparature'}>
          {store?.temparature} &#8451;
        </div>
        <div className={'city'}>{store?.city}</div>
      </div>
    </>
  )
}