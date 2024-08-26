import { useState } from 'react';
import './App.css'
import  FileIcon from "./assets/images/FileIcon.svg";
import Cancel  from "./assets/images/Cancel.svg";

function App() {
  let [files, setFiles] = useState<File[]>([]);

  const handleFileInput = (e:any) => {
    setFiles(Array.from(e.target.files));
  }

  const handleDelete = (index: number) => {
    setFiles(files => files.filter((_, i) => index !== i))
  }

  return (
    <>
    <div className="dropbox">
    <label htmlFor="dropbox">
      <img src={FileIcon} alt="file-icon" />
    </label>
      <h1>Images</h1>
    <input type="file" id="dropbox" className="input-file" accept='image/*' multiple onChange={handleFileInput}/>
      <p className='browse-text'>
        Drag & Drop images or <label htmlFor="dropbox" className='browse'> <u> Browse </u></label>
      </p>
    </div>
    {files.length !== 0 &&  (
      <div className="all-files">
        {files.map((file,index) => (
        <div className="thumbnail-body">
          <img className='thumbnail' key={index} src={URL.createObjectURL(file)} alt="uploaded-file" />
          <img width="20px" height="20px" className='cancel' src={Cancel} alt="cancel" onClick={() => handleDelete(index)} />
        </div>
        ))}
    </div>
    )}
    </>
  )
}

export default App
