import React, { useState, useEffect } from 'react';
import '../src/upload.css'
import {
  getDatabase,
  ref,
  set,
  get,
  remove,
} from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import firebaseApp from './firebase';

function UploadPage() {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const database = getDatabase();
  const storage = getStorage();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const saveText = () => {
    const textRef = ref(database, 'texts/');
    set(textRef, { content: text })
      .then(() => alert('Text saved successfully'))
      .catch((error) => alert('Failed to save text: ', error));
  };

  const fetchText = () => {
    const textRef = ref(database, 'texts/');
    get(textRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setText(snapshot.val().content);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchText();
    fetchFiles();
  }, []);

  const handleFileChange = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  const uploadFiles = async () => {
    const uploadPromises = files.map(async (file) => {
      const fileRef = storageRef(storage, `files/${file.name}`);
      try {
        await uploadBytes(fileRef, file);
      } catch (error) {
        alert('Failed to upload file: ', error);
      }
    });

    await Promise.all(uploadPromises);
    alert('All files uploaded successfully');
    fetchFiles();
  };

  const fetchFiles = () => {
    const filesRef = storageRef(storage, 'files/');
    listAll(filesRef)
      .then(async (res) => {
        const fileNames = await Promise.all(
          res.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            return {
              name: item.name,
              downloadURL,
            };
          })
        );
        setUploadedFiles(fileNames);
      })
      .catch((error) => alert('Failed to fetch files: ', error));
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const deleteFile = async (fileName) => {
    const fileRef = storageRef(storage, `files/${fileName}`);
    try {
      await deleteObject(fileRef);
      fetchFiles();
    } catch (error) {
      alert('Failed to delete file: ', error);
    }
  };

  const downloadFile = (downloadURL, fileName) => {
    fetch(downloadURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => alert('Failed to download file: ' + error));
  };

  return (
    <div>
      <h1>My New Page</h1>
      <div>
        <textarea value={text} onChange={handleTextChange} />
        <button onClick={saveText}>Save Text</button>
      </div>
      <div>
        <input type="file" onChange={handleFileChange} multiple />
        <button onClick={uploadFiles}>Upload Files</button>
      </div>
      <div>
        <button onClick={fetchFiles}>Show Uploaded Files</button>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
              {file.name}
              <button onClick={() => deleteFile(file.name)}>Delete</button>
              <button onClick={() => downloadFile(file.downloadURL, file.name)}>Download</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UploadPage;
