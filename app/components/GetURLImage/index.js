import { useState } from 'react'

export default function GetUrlImage() {
  const [url, setUrl] = useState('https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg')
  const [file, setFile] = useState()
  
  async function uploadFile(file) {


    console.log(file, "shit")

    const formData = new FormData();
      formData.append('file', file);
      formData.append('name', 'testfile.png');
      formData.append('type', 'image/png');

    console.log(formData, "formData")

    const uploadResponse = await fetch("http://localhost:1338/api/upload/", { 
      method: 'POST',
      body: formData
    });

    const data = await uploadResponse.json()
    console.log(data)
  
  }


  async function getFileFromURL(imageUrl) {
    
    const response = await fetch(imageUrl, {
      method: 'GET',
      headers: {}
    })

    const blob = await response.blob();
    const file = new File([blob], 'testfile.png', { type: 'image/png' });
    setFile(file)
  }

  console.log(file, "file")
  return (
    <div>
      <input value={url}  onChange={(e) => setUrl(e.target.value)}/>
      <button onClick={getFileFromURL}>Get Image</button>
      { file && <button onClick={() => uploadFile(file)}>Upload Image</button> }
      { file && <img src={url} alt="" width={600} height={700}/> }

    </div>
  )
}
