import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string,
    
        colors:{
            primary: string,
            primary: string,
            secundary: string,
            tertiary: string,
            
            white: string,
            balck: string,
            gray: string,
            brown: string,
            purplePrimary: string,
            purpleSecundary: string,
            blue: string,
        
            sucess: string,
            warning: string,
        },    
    }
}