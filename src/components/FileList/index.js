import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  MdCheckCircle,
  MdError,
  MdGetApp,
  MdDescription,
} from "react-icons/md";
import { Container, FileInfo } from "./styles";

export default FileList = ({ files }) => (
  <Container>
    {files.map((uploadedFile, index) => (
      <li key={index}>
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
                root: { width: 30 },
                path: { stroke: "#78e5d5" },
              }}
              strokeWidth={7}
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
          {uploadedFile.uploaded && <MdCheckCircle size={24} color="#0D724E" />}
          {uploadedFile.error && <MdError size={24} color="#9A0607" />}
        </div>
      </li>
    ))}
  </Container>
);
