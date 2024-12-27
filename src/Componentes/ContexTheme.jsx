import { createContext, useContext, useState, useEffect } from 'react';

const ContextTheme = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')    

    const handleCambiarTema = () =>{
        setTheme(prevTheme => prevTheme == 'light'? "dark" : "light")
    }

    useEffect(()=>{
        if(theme === "dark"){
            document.querySelector('html').classList.add('dark');
        }else{
            document.querySelector('html').classList.remove('dark');
        }
    },[theme])


    return(
        <>
            <ContextTheme.Provider value={{theme,handleCambiarTema }}>
                {children}
            </ContextTheme.Provider>
        </>
    )
}

export {ThemeProvider, ContextTheme}
