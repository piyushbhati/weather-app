import {React, WeatherStore} from '@api'
import './App.css'
import {Switch} from '@material-ui/core'
import {observer} from 'mobx-react'
import {TemperatureView, LoadingIndicator, GoogleMap} from '@components'
import {useCallback, useState} from 'react'

const App = observer(({store}: { store?: WeatherStore }) => {
  const [theme, setTheme] = useState('light')

  const toggleDarkMode = useCallback(function (currentTheme) {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }, [])
  return (
    <>
      <div className={`bg ${theme}-scheme`}>
        <GoogleMap center={{
          lat: store?.openAPI.loc.lat ?? 0,
          lng: store?.openAPI.loc.long ?? 0
        }}/>
      </div>
      <div className={'App'}>
        <div className={`${theme}-scheme`}>
          <LoadingIndicator loading={store?.openAPI?.loading}/>
          <div className={'header'}>
            <div className={'theme'}>
              Theme: <Switch color={'default'} checked={theme === 'dark'} onChange={() => toggleDarkMode(theme)}/>
              {theme}
            </div>
          </div>
          <main className={'main'}>
            <TemperatureView store={store} className={theme}/>
          </main>
        </div>
      </div>
    </>
  )
})

export default App
