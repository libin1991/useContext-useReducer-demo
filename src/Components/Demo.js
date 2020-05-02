import React from 'react'
import { useUser } from '../Reducers/useUser'
import Demo2 from './Demo2'


const Demo = () => {
  const { userStore, userDispatch } = useUser()

  return (
    <div>
      <p>You clicked {userStore.count} times</p>

      <button onClick={() => userDispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => userDispatch({ type: "decrement" })}>
        -
      </button>
      <br />
      ----------------------
      <br />
      <Demo2 />

    </div >
  )
}

export default Demo
