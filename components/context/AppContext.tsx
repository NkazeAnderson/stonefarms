"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"

const AppContext = createContext({
    isMobileNavOpen:false,
    toggleMobileNav:()=>{}
})

export function useAppContext () {
    const ctx = useContext(AppContext)
    if (!ctx) {
        throw "Wrap in AppContext required"
    }
    return ctx
} 

function AppContextProvider(props:PropsWithChildren) {
    const [ isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    function toggleMobileNav() {
        setIsMobileNavOpen(prev=>!prev)
    }
    return <AppContext.Provider value={{isMobileNavOpen, toggleMobileNav}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider