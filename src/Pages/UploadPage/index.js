import React, { useState } from 'react';
import filesize from 'filesize';

// import api from '../../services/api';

import FileList from '../../Components/FileList'; // verificar as pastas
import Upload from '../../Components/Upload'; // verificar as pastas

import { Container } from './styles';

function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // função que pega os documentos e deixa eles prontos para o upload
  function submitFile(files) {
    const uploadFiles = files.map((file) => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
    }));

    setUploadedFiles(uploadFiles);
  };

  // função que envia os documentos para a api
  async function handleUpload() {
    const data = new FormData();

    if (!uploadedFiles.length) return;

    data.append('file', uploadedFiles[0].file, uploadedFiles[0].name); // ou só data.append('file', uploadedFiles[0].file);

    try {
      // await api.post('/rota_da_api', data);
      
    } catch (err) {
      throw new Error(err.response.error);
    }
  };

  return (
    <Container>
      <Upload onUpload={submitFile} />
      { !!uploadedFiles.length && <FileList files={uploadedFiles} /> }

      <button onClick={handleUpload} type="button">Enviar</button>
    </Container>
  );
}

export default UploadPage;