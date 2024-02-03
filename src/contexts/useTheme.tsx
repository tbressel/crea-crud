////////////////////////////////////////////////////////
//////////////////   IMPORTATIONS   ////////////////////
////////////////////////////////////////////////////////

// React importations
import React, { createContext, useState } from 'react';


////////////////////////////////////////////////////////////
//////////////////   TYPE INTERFACES    ////////////////////
////////////////////////////////////////////////////////////
type Colors = {
    bleu1: string;
    bleu2: string;
    gris1: string;
    gris2: string;
    blanc1: string;
    blanc2: string;
    blanc3: string;
    blanc4: string;
    blanc5: string;
    rouge: string;
    black: string;
};

////////////////////////////////////////////////////////////
//////////////////   CONTEXT COMPONENT   ///////////////////
////////////////////////////////////////////////////////////

export const ThemeContext = createContext<{ colors: Colors, toggleTheme: () => void }>({

    // Default values
    colors: {
        bleu1: '',
        bleu2: '',
        gris1: '',
        gris2: '',
        blanc1: '',
        blanc2: '',
        blanc3: '',
        blanc4: '',
        blanc5: '',
        rouge: '',
        black: ''
    },
    // Default function
    toggleTheme: () => {}
});


////////////////////////////////////////////////////////////
//////////////////   MAIN COMPONENT   //////////////////////
////////////////////////////////////////////////////////////

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    // Colors for the light theme
    const lightColors = {
        bleu1: '#007AFF',
        bleu2: '#004494',
        gris1: '#BDBDBD',
        gris2: '#8E8E93',
        blanc1: '#FFFFFF',
        blanc2: '#F5F5F5',
        blanc3: '#E5E5E5',
        blanc4: '#E0E0E0',
        blanc5: '#C4C4C4',
        rouge: '#FF3B30',
        black: '#000000'
    };

    // Colors for the dark theme
    const darkColors = {
        bleu1: '#004494',
        bleu2: '#004494',
        gris1: '#BDBDBD',
        gris2: '#8E8E93',
        blanc1: '#7a7a7a',
        blanc2: '#a5a5a5',
        blanc3: '#adadad',
        blanc4: '#E0E0E0',
        blanc5: '#000000',
        rouge: '#ffffff',
        black: '#000000'
    };

    // State to store the current theme
    const [isLightTheme, setIsLightTheme] = useState(true);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsLightTheme(prevIsLightTheme => !prevIsLightTheme);
    }

    // Choose the colors depending the actuel one.
    const themeColors = isLightTheme ? lightColors : darkColors;

    return (
        <ThemeContext.Provider value={{ colors: themeColors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;