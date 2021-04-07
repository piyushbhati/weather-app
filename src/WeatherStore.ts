import {computed, makeAutoObservable, when} from 'mobx'
import {OpenAPI} from './OpenAPI'

export type tUnits = 'metric' | 'imperial'

export type iStyleOfNow = 'day' | 'night'

export class WeatherStore {
  name: string = ''

  data: any = {}

  units: tUnits = 'metric'

  constructor() {
    makeAutoObservable(this, {
      city: computed
    })
    when(() => !this.openAPI.loadingLatLon, async () => {
      this.data = await this.openAPI?.getWeather({units: this.units})
      this.openAPI?.getForecast()
    })
  }

  get city (): string {
    return this.data?.name ?? 'New Delhi'
  }

  get temparature (): number {
    return  this.data?.main?.temp
  }

   get styleOfNow(): iStyleOfNow {
    const currentTime = new Date().getHours();
    if ((0 <= currentTime && currentTime < 5) || (16 <= currentTime && currentTime < 22) || (22 <= currentTime && currentTime <= 24)) {
      return 'night'
    }
    if ((5 <= currentTime && currentTime < 11) || (11 <= currentTime && currentTime < 16)) {
      return 'day'
    }
    return 'day'
  }

  openAPI = new OpenAPI()




}