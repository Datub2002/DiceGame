import React from 'react';
import {useContext} from 'react'
import { themeContext } from './ThemeProvider';

function Paragrahp(props) {
    const value = useContext(themeContext)
    console.log(value);
    return (
        

        <p className={value.Theme}>
                Context provide a ....
        </p>
    );  
}

export default Paragrahp;