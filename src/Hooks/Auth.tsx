import React, { createContext, useState, useContext } from 'react';


interface IAuthContext{
    logged: boolean;
    signIn(name: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);


const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() =>{
        const isLogged = localStorage.getItem('@my-task:logged')
    
        return !!isLogged;
    });

    const signIn = (name: string) => {
        
        localStorage.setItem('@my-task:user', name);
        localStorage.setItem('@my-task:logged', 'true');
        setLogged(true);
    }

    const signOut = () =>{
        localStorage.removeItem('@my-task:logged');
        localStorage.removeItem('@my-task:user');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext{
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };