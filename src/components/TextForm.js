import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLo = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCap = ()=>{
        let words = text.split(" ");
        for(let i=0; i<words.length; i++){
            words[i]= words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
        }
        let newText = words.join(" ");
        setText(newText);
    }
    const handleCopy = ()=>{
        let text = document.getElementById("text");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.alert("info", "Copied to clipboard!");
    }
    const handleClr = ()=>{
        setText("");
    }
    const countWord = (text)=>{
        let words = text.split(/\s+/);
        let show  = words.filter(function(word){
            return word!==""
        })
        return show.length;
    }
  return (
    <div className="my-2">
        <h2 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h2>
        <textarea className="form-control mt-2 mb-2" style={{backgroundColor:props.mode==='light'?'white':'black', color:props.mode==='light'?'black':'white'}}value={text} id="text" rows="8" onChange={handleChange} />
        {/* <button type="button" className="btn btn-success mx-1" onClick={handleOrg}>Original</button> */}
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUp} disabled={text.length===0}>UPPERCASE</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLo} disabled={text.length===0}>lowercase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCap} disabled={text.length===0}>Capitalcase</button>
        <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length===0}>Copy</button>
        <button type="button" className="btn btn-secondary mx-1 my-1" onClick={handleClr} disabled={text.length===0}>Clear</button>
        <div className="my-1" style={{color:props.mode==='light'?'black':'white'}}>
            {text.length} characters. {countWord(text)} word(s).
        </div>
    </div>
  );
}
