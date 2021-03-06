import React from 'react'
import { useUser } from '../Reducers/useUser'


const Counter = () => {
  const { userStore, userDispatch } = useUser()

  return (
    <div>
      <p>You clicked {userStore.count} times {userStore.hasPermission.join('-')}</p>

      <button onClick={() => userDispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => userDispatch({ type: "decrement" })}>
        -
      </button>
      <br />
      <br />
      <br />
    </div >
  )
}

export default Counter

