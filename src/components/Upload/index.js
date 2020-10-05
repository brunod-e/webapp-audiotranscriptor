import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>Select a .mp3 file to convert into text.</UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">
          File not supported, make sure that is a .mp3 file!
        </UploadMessage>
      );
    }

    return (
      <UploadMessage type="success">Drop your .mp3 files here!</UploadMessage>
    );
  };

  render() {
    const { onUpload } = this.props;

    return (
      <Dropzone accept="audio/mp3, audio/mpeg" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
