import React, { Component } from 'react'
import '../../stylesheets/style.css'


export default class Dropzone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highlight: false
        }
        this.fileInputRef = React.createRef()

        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    onDragOver(event) {
        event.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }

    onDragLeave() {
        this.setState({ hightlight: false });
    }

    onDrop(event) {
        event.preventDefault();
        if (this.props.disabled) return;
        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files);
            this.props.onFilesAdded(array);
        }
        this.setState({ hightlight: false });
    }

    openFileDialog = () => {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded = (event) => {
        if (this.props.disabled) return;
        const files = event.target.files;
        if (this.props.onFilesAdded) {
            const array = this.fileListToArray(files)
            this.props.onFilesAdded(array)
        }
    }

    fileListToArray = (list) => {
        const array = []
        for (let i = 0; i < list.length; i++) {
            array.push(list.item(i))
        }
        return array
    }

    render() {
        return (
            <div className="App" >
                <div className="Card" >
                    <div className={`Dropzone ${this.state.highlight ? 'Highlight' : ''}`} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop} onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? "default" : "pointer" }} >
                        <img
                            alt="upload"
                            className="Icon"
                            src="cloud_upload-24px.svg"
                        />
                        <input
                            ref={this.fileInputRef}
                            className="FileInput"
                            type="file"
                            multiple
                            onChange={this.onFilesAdded}
                        />
                        <span>Upload Files</span>
                    </div>
                </div>
            </div>
        )
    }
}