import React from "react";
import "./Definitions.css";

const Definitions = ({word, meanings, category, LightMode}) => {
    let lexicon = [];
    let partOfSpeech = '';
    for(let i=0; i< meanings.length; i++){
        for(let k=0; k<meanings[i].meanings.length; k++) {
            partOfSpeech = meanings[i].meanings[k].partOfSpeech;
            for(let l=0; l<meanings[i].meanings[k].definitions.length; l++){
                let objForLexicon = {};
                objForLexicon.part = partOfSpeech;
                objForLexicon.defi = meanings[i].meanings[k].definitions[l].definition;
                objForLexicon.exam = meanings[i].meanings[k].definitions[l].example;
                meanings[i].meanings[k].definitions[l].synonyms.length > 0 ? 
                    (objForLexicon.syno=meanings[i].meanings[k].definitions[l].synonyms) : 
                    (objForLexicon.syno=undefined);
                lexicon.push(objForLexicon);
            }
        }
    }
    //console.log(meanings[0].phonetics[0].audio);
    
    return (
        <div className="meanings">
            {
                meanings[0] && word && category === 'en' && (
                    <audio controls 
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}    
                    >
                        Your browser does not support the <code>audio</code> element.
                    </audio>
                )
            }
            
            {
                word === "" ? (
                    <span className='subTitle'>Start by typing a word in Search</span>
                ) : (
                    lexicon.map(item => (
                        <div className='single-defi' 
                            style={{backgroundColor:LightMode?  "rgb(105, 105, 105)": "#fff",
                                    color:LightMode?  "#fff": "rgb(105, 105, 105)"}}
                        >
                            <span className='part'>
                                {item.part}: 
                            </span>
                            <p className='defi'>
                                {item.defi}
                                <hr />
                            </p>
                            {item.exam && (
                                <p className="exampl">
                                    <b className='aux'>ex: </b>{item.exam}
                                </p>
                            )}
                            {item.syno && (
                                <p className="synon">
                                    <b className='aux'>sy: </b>{item.syno.map((syn) => `${syn}, `)}
                                </p>
                            )}
                        </div>))
                )
            }
        </div>
    )
}

export default Definitions;