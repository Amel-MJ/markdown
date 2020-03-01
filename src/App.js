import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import './App.css';



//const mdParser = new MarkdownIt(/* Markdown-it options */);

class App extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handelCancel = () => {
    this.setState({
      value: ''
    });
  }
   handleEditorChange=({html, text})=> {    
    console.log('handleEditorChange', html, text)
  }
  render() {
    return (
      <form>
        {/* <MdEditor
      value=""
      renderHTML={(text) => mdParser.render(text)}
      onChange={this.handleEditorChange}
       />*/}
        <div >
          <div className='top'>
          <h2>Content</h2>
          <span>
        <button className='button' value='cancel' onClick={this.handelCancel}>Cancel</button>
        <button className='button ' value='submit' onClick={this.handelSubmit}>Save</button>
        </span>
         
          </div>
          
          <textarea className="textarea"

            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div  className="checkbox">
          <h2>Type</h2>

          <input type="checkbox" id="text" name="text" value="text" />
          <label for="text"> Text</label><br />
          <input type="checkbox" id="img" name="img" value="img" />
          <label for="img"> Image</label><br />
          <input type="checkbox" id="note" name="note" value="note" />
          <label for="note"> Note</label><br />


        </div>
        <div >
          <h2>Note</h2>
          <textarea className="textareaNote"/>

        </div>
      </form>
    )
  }
}

export default App;
