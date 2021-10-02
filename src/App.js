/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import './App.css';
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import * as React from 'react';
import {useEffect, useState} from 'react';
import { Container } from "@material-ui/core";
import { alpha, styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import Footer from "./components/Footer/Footer";

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: grey[600],
    '&:hover': {
      backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: grey[600],
  },
}));




function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [LightMode, setLightMode] = useState(false);
  

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      //console.log(data);
      setMeanings(data.data);
    } catch (error) {
        console.log(error);
    }
  }
  
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  


  return (
    <div className="App"
      style={{
        backgroundColor:LightMode?"#fff":"#282c34",
        color:LightMode?"#000": "#fff"
      }}
    >
     
      <Container maxWitdh="md" className="container">
        <div className="dark-mode">
          <span className="sw-label">Oscuro</span>
          <DarkModeSwitch defaultChecked 
            checked={LightMode} 
            onChange={() => setLightMode(!LightMode)}/>
          <span className="sw-label">Claro</span>
        </div>
        <Header 
          category={category} 
          setCategory={setCategory} 
          word={word} 
          setWord={setWord}
          setMeanings={setMeanings}
          LightMode={LightMode}
        />
        {meanings && (
          <Definitions 
            word={word} 
            meanings={meanings} 
            category={category}
            LightMode={LightMode}
          />
          )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
