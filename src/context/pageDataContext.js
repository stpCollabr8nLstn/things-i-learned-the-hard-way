import React, { useState, createContext } from "react"

import Home from "../components/home"
import Thing1 from "../components/thing1"

const PageDataContext = createContext([{}, () => {}])

const PageDataProvider = ({ children }) => {
  const [state, setState] = useState({
    pages: [
      {
        component: Home,
        title: "Home",
      },
      {
        component: Thing1,
        title: "Thing1",
      },
    ],
    displayPage: {
      component: Home,
      title: "Home",
    },
    thingsIsOpen: false,
  })
  return (
    <PageDataContext.Provider value={[state, setState]}>
      {children}
    </PageDataContext.Provider>
  )
}

export { PageDataContext, PageDataProvider }
