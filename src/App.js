import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";


import GlobalStyle from "./styles/global";
import { Content } from "./styles/content";
import { Container } from "./styles/container";

import Upload from "./components/Upload";
import FileList from "./components/FileList";
import api from "./services/api";

class App extends Component {
  state = {
    uploadedFiles: [],
  };

  handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map((uploadedFile) => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      }),
    });
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();

    data.append("audio", uploadedFile.file, uploadedFile.name);

    api
      .post("transcribe", data, {
        onUploadProgress: (event) => {
          const progress = parseInt(
            Math.round((event.loaded * 100) / event.total)
          );
          this.updateFile(uploadedFile.id, {
            progress,
          });
        },
      })
      .then((response) => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url,
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true,
        });
      });
  };

  render() {
    const { uploadedFiles } = this.state;

    return (
      <Container className="content">
        <div className="logo-container">
          <img src="/images/logo.png" alt="Elint" />
          <h2>Your audio transcription platform</h2>
        </div>
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
