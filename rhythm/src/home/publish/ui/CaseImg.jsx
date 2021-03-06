import React,{useState,useCallback} from 'react'
import http from '../../../utils/https'
// import {get,post} from '../../../utils/http'


import { ImagePicker} from 'antd-mobile';
import useChangeForm from './useChangeForm'
import { 
    Add,
} from './publish'
import { post } from '../../../utils/http';
const data=[];

const CaseImg = (props) => {
    let [files,setFiles] = useState(data)
    const { handlePictureChange } = useChangeForm()

    const onChange = useCallback((img) => {
        setFiles(img);
        console.log(img[0].file);
        let imgForm = new FormData()
        imgForm.append('imgFile',img[0].file)
        imgForm.set('imgFile',img[0].file)
        console.log(imgForm);
        
        // http.post('http://10.9.70.205:8081/uploadImgToOSS',imgForm)
        // .then(res => { handlePictureChange(res) })
        http.post('http://114.67.247.63:8010/uploadImgToOSS',imgForm)
        .then(res => { handlePictureChange(res) })
    })

    const getUrl = useCallback((index,file) => {
        // console.log(file);
        // let imgForm = new FormData()
        // imgForm.append('imgFile',file[0].file)
        
        // http.post('http://123.57.109.224:8081/uploadImgToOSS',imgForm)
        // .then(res => { console.log(res) })
    })

    return (
        <>
        <Add>
            <p>公告照片 :</p>
            <ImagePicker
            files={files}
            onChange={onChange}
            onImageClick={getUrl}
            selectable={files.length < 1}
            length={1}
            disableDelete={true}
             />
        </Add>
      </>
    )
}

export default CaseImg