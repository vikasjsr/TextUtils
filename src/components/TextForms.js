import React,{useState} from 'react'



export default function TextForms(props) {

      const handleUpperClick = ()=>{
          console.log("upperCase is clicked:" + text);
          let newtext = text.toUpperCase();
          setText(newtext);
      }

      const handleLoClick = ()=>{
        console.log("upperCase is clicked:" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }

      const handleClear = ()=>{
        let newtext = ("");
        setText(newtext);
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }


    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
        
    }


   const[text,setText] = useState("");

  return (
  

    <>
       <div className='container' style={{color:props.mode === 'light'?'#042743':'white'}}>
          <div className="mb-3">
             <h1><label hmtlfor="myBox" className="form-label">{props.textArea}</label></h1>
             <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'grey',
                                                                                                          color:props.mode === 'light'?'#042743':'white'}} rows="10"></textarea>
 
            <button className="btn btn-primary my-3 mx-3" onClick={handleUpperClick}>Convert to upperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lowerCase</button>
            <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-3"  onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-3" onClick={handleSpaces}>remove Extra spaces</button>

        </div>
       </div>

       <div className="container my-3" style={{color:props.mode === 'light'?'#042743':'white'}}>

         <h1>My text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} almost average time to read this paragraph</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text:"enter your text to prview:"}</p>

       </div>
    
    </>
  )
}
