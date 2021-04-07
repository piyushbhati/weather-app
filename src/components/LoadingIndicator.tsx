import {CircularProgress, React} from '@api'
import {observer} from 'mobx-react'
import './LoadingIndicator.css'

export const LoadingIndicator = observer(({ loading }: {loading?: boolean}) => <div className={'loading'} data-loading={loading}>
  <CircularProgress color={'primary'} variant={'indeterminate'} size={40} thickness={2}/>
</div>)