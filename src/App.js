import React, { Component } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

class App extends Component {
  state = {
    value: '',
    text: false,
    img: false,
    video: false

  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  toggleChangeText= () => {
    this.setState(prevState => ({
      text: !prevState.text,
    }));
  }
  toggleChangeImg = () => {
    this.setState(prevState => ({
      img: !prevState.img,
    }));
  }

  toggleChangeVideo = () => {
    this.setState(prevState => ({
      video: !prevState.video,
    }));
  }
  handelCancel = () => {
    this.setState({
      value: ''
    });
  }
  handleEditorChange = ({ html, text }, e) => {
    console.log('handleEditorChange', html, text)
    this.setState({ value: html });

  }
  render() {
    return (
      <form>

        <div >
          <div className='top'>
            <h2>Content</h2>
            <span>
              <button className='buttonTop' value='cancel' onClick={this.handelCancel}>Cancel</button>
              <button className='buttonTop ' value='submit' onClick={this.handelSubmit}>Save</button>
            </span>

          </div>

          <MdEditor
            value=""
            name="value"
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />

        </div>
        <div className="checkbox">
          <h2>Type</h2>

          <input type="checkbox" id="text" name="text"  checked={this.state.text} onClick={this.toggleChangeText} />
          <label htmlFor="text"> Text</label><br />
          <input type="checkbox" id="img" name="img" checked={this.state.img} onChange={this.toggleChangeImg} />
          <label htmlFor="img"> Image</label><br />
          <input type="checkbox" id="video" name="note" checked={this.state.video} onChange={this.toggleChangeVideo} />
          <label htmlFor="note"> Video</label><br />


        </div>
        <div >
          <h2>Note</h2>
          <MdEditor
            value=""
            name="textareaNote"
            renderHTML={(text) => mdParser.render(text)}
            onChange={this.handleEditorChange}
          />
        </div>
      </form>
    )
  }
}

export default App;