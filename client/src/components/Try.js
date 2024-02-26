// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function Try() {

// const [file, setFile] = useState(); 
// const [data, setData] = useState([]); 

// const handleFile = (e) => {
//     setFile(e.target.files[0])
// }


// useEffect(() => {
//     axios.get('http://localhost:3001/tryy')
//     .then(res => {
//         setData(res.data[0])
//     })
//     .catch(err => console.log(err));
// },[])

// const handleUpload = () => {
//     const formdata = new FormData();
//     formdata.append('image', file);
//     axios.post('http://localhost:3001/upload',formdata)
//     .then(res => {
//         if(res.data.Status === "Success") {
//             console.log("Succeeded")
//         } else {
//             console.log("Failed")
//         }
//     })
//     .catch(err => console.log(err));
// }

//   return (
//     <div className='con'>
//       <input type="file" onChange={handleFile}/>
//       <button onClick={handleUpload}>Upload</button>
//       <br/>
//       <img src = {'http://localhost:3001/images/'+data.image} alt=""/>
//     </div>
//   )
// }

// export default Try
