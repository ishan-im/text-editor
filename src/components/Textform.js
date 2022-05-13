        import React, {useRef, useState } from "react"

        import  { useReactToPrint } from 'react-to-print';

       



        export default function Textform(props) {

            const componentRef = useRef(null);
            const handlePrint = useReactToPrint({
              content: () => componentRef.current,
            });
            
            // text update
            const [text, setText] = useState("");

            const handleUpClick=() =>{
            
                let newText = text.toLocaleUpperCase(); 
                setText(newText);
                props.showAlert('Converted to upper case','success');
            }

            const handleLowClick = () =>{
                let newText = text.toLocaleLowerCase(); 
                setText(newText);
                props.showAlert('Converted to lower case','success');
            }

            const handleClearText = () =>{
                let newText = ''; 
                setText(newText);
                props.showAlert('textform cleared','success');
            }  

            
        

            const handleOnChange=(event) =>{
                
                setText(event.target.value);
            }

            
            // button text change

            const [btnText, setBtnText] = useState("Copy Text");
            const textAreaRef = useRef(null) 

            const copyToClipBoard = (e) =>{

              textAreaRef.current.select();
               document.execCommand('copy');
            // This is just personal preference.
            // I prefer to not show the whole text area selected.
              e.target.focus();
                setBtnText('Copy Text');
                props.showAlert('Copied!','success');
            }
            
           
          

            return (
                <>
                    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    
                        <div className="mb-3 ">
                            <h1 className='my-4'>{props.heading}</h1>
                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} ref={textAreaRef} 
                                rows="6" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                        </div >

                        <button className="btn btn-primary my-2 " onClick={handleUpClick} disabled={text.length === 0}>Convert to upperCase</button>
                        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick} disabled={text.length === 0}>Convert to lowerCase</button>
                        <button className="btn btn-primary mx-2 my-2" onClick={copyToClipBoard} disabled={text.length === 0}>{btnText}</button>
                        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText} disabled={text.length === 0}>Clear Text</button>
                        
                        
                         <button className="btn btn-primary mx-2 my-2" onClick={handlePrint} disabled={text.length === 0}>Print Text</button>
                                
                           
                    </div>

                    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h1>Your Text Summary</h1>
                        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                        <p>{0.008 * text.split('').filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                        <h2>Preview</h2>
                        <p ref={componentRef}>{text.length > 0 ? text : 'Nothing to Preview :(' }
                        
                        </p>
                    </div>




                </>
            )
        }


