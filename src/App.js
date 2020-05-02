import React from 'react'
import { UserCtxProvider } from './Reducers/useUser';
// import { SettingsCtxProvider } from './Reducers/useSettings';

import Counter from './Components/Counter'
import Demo from './Components/Demo'

// import { Counter2 } from './Components/Counter2'

const App = () => {
  return (
    <UserCtxProvider>
      <Counter />
      <Demo />
    </UserCtxProvider>
  )
}

export default App
