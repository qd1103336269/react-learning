import React, { useEffect, useState } from 'react'

function FuncComponent(props) {
  const [ date, setDate ] = useState(new Date());
  useEffect(() => {
    // 相当于三个生命周期的集合 didMount willUnMount didUpdate
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => clearInterval(timer);
  }, [])
  return (
    <div>
      <h3>FuncComponent</h3>
      当前时间: { date.toLocaleTimeString() }
    </div>
  )
}

export default FuncComponent
