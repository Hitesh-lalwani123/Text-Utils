import React,{useState} from 'react'


export default function TextForm() {
    const [text, setText] = useState("")
    let textstyle = {
        float: 'left',
        margin: '20px'
    }

    const onChange = (event) => {
        console.log("i am on change");
        setText(event.target.value)
    }
    const handleUpClick = (event) => {
        console.log("i am clicked");
        setText(text.toUpperCase());
        
    }
    const handleLoClick = (event) => {
        console.log("i am clicked");
        setText(text.toLowerCase());
        
    }
    const handleClear = (event) => {
        console.log("i am clicked");
        setText('');
        
    }


    return (
        <div style={textstyle}>
            <h2>Enter Your text here to Analyze</h2>
            <div className="mb-3">

                <textarea className="form-control" id="mybox" rows="8" cols='100' value={text} placeholder = "Enter text here" onChange={onChange}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Lower Case</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
        </div>
    )
};
