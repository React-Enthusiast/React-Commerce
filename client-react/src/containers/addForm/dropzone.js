import React, { Component } from 'react'
import '../../stylesheets/style.css'
export default class Dropzone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hightlight: false
        }
        this.fileInputRef = React.createRef()
    }

    onDragOver = (event) => {
        event.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }

    onDragLeave = () => {
        this.setState({ hightlight: false });
    }

    onDrop = (event) => {
        event.preventDefault();
        if (this.props.disabled) return;
        const file = event.dataTransfer.files;
        // console.log(file);
        if (this.props.onFilesAdded) {
            this.props.onFilesAdded(file[0])
        }
        this.setState({ hightlight: false });
    }

    openFileDialog = () => {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    onFilesAdded = (event) => {
        if (this.props.disabled) return;
        const file = event.target.files;
        // console.log(file);
        if (this.props.onFilesAdded) {
            this.props.onFilesAdded(file[0])
        }
    }

    render() {
        return (
            <div className={`Dropzone ${this.state.hightlight ? 'hightlight' : ''}`} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop} onClick={this.openFileDialog} style={{ cursor: this.props.disabled ? "default" : "pointer" }} >
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
                <span>Upload Image</span>
            </div>
        )
    }
}