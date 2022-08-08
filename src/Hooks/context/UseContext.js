import Content from './Content';
import './Dark.css'
import { useContext } from 'react';
import { themeContext } from './ThemeProvider';

function UseContext(props) {
    const valueFun = useContext(themeContext)
    return (

            <div className='p-5'>
                <button onClick={valueFun.handleTheme} className='btn btn-success' >Toggle Theme</button>
                
                <Content />
            </div>
    );
}

export default UseContext;