import React from 'react';

import { Container, FileInfo } from './styles';

const FileList = ({ files }) => {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.name}>
          <FileInfo>
            <img src={uploadedFile.preview} alt="" />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
