import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class DescDetail extends Component {
    render() {
        return (
            <div className="m-4">
                <ReactMarkdown source={this.props.description} />
            </div>
        )
    }
}
