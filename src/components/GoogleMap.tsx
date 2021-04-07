import {React, GoogleApiWrapper, Map} from '@api'
import {LoadingIndicator} from './LoadingIndicator'

const MapComponent = ({google, center}: {google: any, center: any}) => {
  return <Map google={google} center={{
    lat: -1.2884,
    lng: 36.8233
  }} initialCenter={{
    lat: -1.2884,
    lng: 36.8233
  }}/>
}
const GoogleAPIToken: string = process.env.REACT_APP_GOOGLE_API_KEY || ''

export const GoogleMap = GoogleApiWrapper({
  apiKey: GoogleAPIToken,
  LoadingContainer: LoadingIndicator
})(MapComponent)