
import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  // const initialInput = '### Header'
  const [input, setInput] = useState('# Header \n # Sub-Header \n [links](https://www.freecodecamp.org) \n `<div></div>` \n ```function``` \n * List \n > This is a blockquote \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)');
    return (
      <div className="App">
        <div className="container">
          <div class="text-editor" className="row mt-4">
            <h1>
              Editor
            </h1>
            <textarea id="editor" onChange={(event) => setInput(event.target.value)} value={input}></textarea>
          </div>
          <div class="text-preview" className="row mt-6">
            <h1>
              Previewer
            </h1>
            <div id="preview">
              <ReactMarkdown>{input}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    )
}



export default App;
