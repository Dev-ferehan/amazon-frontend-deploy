import React from 'react'
import Header from '../HEADER/Header'
function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Layout
