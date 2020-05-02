import React, { useState, useCallback, useEffect } from 'react'
import { useUser } from '../Reducers/useUser'


function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([11, 12, 15]);
    }, 2000)
  });
}



const Demo2 = () => {
  const { userStore, userDispatch } = useUser();
  const [state, setState] = useState({
    A: 100,
    B: 200
  });
  useEffect(() => {
    console.log(123);
  }, [])
  const click = useCallback(async (a, b) => {
    const data = await getData();
    console.log(data)
    userDispatch({
      type: "pushData",
      data
    });
  });

  return (
    <div>
      <p>You clicked {JSON.stringify(userStore)} times</p>
      <br />
      ----------------------
      <br />
      <div>点击2秒后插入数据(模拟异步)</div>
      <ul>
        {userStore.hasPermission.map((item, index) => {
          return <li key={index} onClick={() => { click(item, index) }}>{item}</li>;
        })}
      </ul>
      <br />
      ----------------------
      <br />

      <p onClick={() => {
        userDispatch({
          type: "reset"
        });
        setState((state) => {
          return {
            ...state,
            A: state.A + 2
          }
        })
      }}>点击初始化数据 {state.A}</p>
      <p onClick={() => {

        setTimeout(() => {
          userDispatch({
            type: "reset"
          });
        }, 2000);


      }}>2秒后复位{state.B}</p>
    </div >
  )
}

export default Demo2


/*

setState((state) => {
          return {
            ...state,
            B: state.B + 1
          }
        })


*/