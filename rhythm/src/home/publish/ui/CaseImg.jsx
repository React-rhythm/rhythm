import React,{useState,useCallback} from 'react'

import { ImagePicker} from 'antd-mobile';
import { 
    Add,
} from './publish'
const data = [];

const CaseImg = (props) => {
    let [files,setFiles] = useState(data)
    const onChange = useCallback((files) => {
        console.log(files);
        setFiles(files);
    })
    return (
        <>
        <Add>
            <p>公告照片 :</p>
            <ImagePicker
            files={files}
            onChange={onChange}
            onImageClick={(index,fs) => console.log(fs)}
            selectable={files.length < 1}
            length={1}
             />
        </Add>
      </>
    )
}

export default CaseImg