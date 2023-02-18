import axios, { AxiosResponse } from 'axios'
import $api from '../../../../api/axiosConfig'

export const uploadImages = async (formData: FormData): Promise<AxiosResponse<{data: string[]}>> => {
  return await axios.post('http://localhost:5000/uploads', formData, {
    onUploadProgress: ProgressEvent => {
      const totalLength = ProgressEvent.total;
      console.log(totalLength);
      if(totalLength) {
        let progress = Math.round((ProgressEvent.loaded * 100) / totalLength)
        console.log(progress);
      }
    }
  });
}

export const uploadStory = async (body: {title: string, slides: string[], cover: string}) => {
  return await axios.post('http://localhost:5000/story', body)
}

// {
  //   onUploadProgress: progressEvent => {
  //     const totalLength = progressEvent.total;
  //     // const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
  //     // console.log('total', totalLength)
  //     if (totalLength) {
  //         let progress = Math.round((progressEvent.loaded * 100) / totalLength)
  //         console.log(progress)
  //     }
  // }}