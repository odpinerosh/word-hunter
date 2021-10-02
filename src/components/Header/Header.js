import React from "react";
import './Header.css';
import { TextField, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import categories from '../../data/categories';

const Header = ({ setCategory, category, word, setWord, LightMode, setMeanings }) => {

    const darkTheme = createTheme({
        palette: {
            /* primary: {
                mode: LightMode ? '#000': '#fff',
            },
            type: LightMode ? "light" : "dark",*/
            mode: LightMode ? 'light': 'dark',
        }, 
      });


    const handleChange = (language) => {
        setCategory(language);
        setWord('');
        setMeanings([]);
    }

    return (
        <div className="header">
            <span className="title">{word?word:"diccionario"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="search-word" 
                        className="search" 
                        label="Buscar..." 
                        variant="filled"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    
                    <TextField
                        id="select-lang"
                        className = "select"
                        select
                        label=" "
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        helperText="Idioma"
                        variant="filled">
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;