import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  MdCheckCircle,
  MdError,
  MdGetApp,
  MdDescription,
} from "react-icons/md";
import { Container, FileInfo } from "./styles";

const FileList = ({ files }) => (
  <Container>
    {files.map((uploadedFile) => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <MdDescription style={{ marginRight: 8 }} size={24} color="#6E808F" />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>{uploadedFile.readableSize}</span>
          </div>
        </FileInfo>
        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: "#223951" },
              }}
              strokeWidth={10}
              value={uploadedFile.progress}
            />
          )}

          {uploadedFile.url && (
            <a
              href={uploadedFile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdGetApp style={{ marginRight: 8 }} size={24} color="#6E808F" />
            </a>
          )}
          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#223951" />}
          {uploadedFile.error && <MdError size={24} color="#223951" />}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;
