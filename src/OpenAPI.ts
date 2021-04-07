import {makeAutoObservable, tUnits} from '@api'
import axios from 'axios'

interface iLocation {
  lat?: number,
  long?: number,
  name?: string,
  units?: tUnits
}

const TOKEN = process.env.REACT_APP_OPEN_API_KEY

const URI = `http://api.openweathermap.org/data/2.5/`

export class OpenAPI {
  loading: boolean = true

  loadingLatLon: boolean = true

  loc: iLocation = {}

  constructor () {
    makeAutoObservable(this)
    this.getCurrentLocationLatLong()
  }

  getCurrentLocationLatLong: () => void = () => navigator.geolocation.getCurrentPosition(position => {
    this.loc = {lat: position.coords.latitude, long: position.coords.longitude}
    this.loadingLatLon = false
  })

  getWeather = async (options?: iLocation) => {
    const {loc} = this
    try {
      this.loading = true
      const result:any = await axios.get(`${URI}weather?lat=${loc.lat}&lon=${loc.long}&appid=${TOKEN}&units=${options?.units ?? 'metric'}`)
      console.log({weather: result.data})
      return result.data
      // this.weatherStore.name = result.data.name
    } catch (e) {
      console.warn(e, 'error in get Weather')
    } finally {
      this.loading = false
    }
  }

  getForecast = async (options?: iLocation) => {
    const {loc} = this
    try {
      this.loading = true
      const result: any = await axios.get(`${URI}forecast?lat=${loc.lat}&lon=${loc.long}&appid=${TOKEN}&units=${options?.units ?? 'metric'}`)
      console.log({forecast: result.data})
      return result.data
    } catch (e) {
      console.warn(e, 'error in get forecast')
    } finally {
      this.loading = false
    }
  }
}