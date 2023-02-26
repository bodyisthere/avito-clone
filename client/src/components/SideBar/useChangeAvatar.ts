import React, { FC, useState } from 'react'
import { useActions, useAppSelector } from '../../hooks'

import { userApi } from '../../store/api/userApi'
import { uploadApi } from '../../store/api/uploadApi'

export const useChangeAvatar = () => {
  const [isPopOpen, setIsPopOpen] = useState<boolean>(false);
  const [isConditionInfoOpen, setIsConditionInfoOpen] = useState<boolean>(false);
  const {setUserAvatar} = useActions();

  //смена аватара
  const [uploadAvatar, { data }] = userApi.useAvatarChangeMutation();
  //загрузка изображения
  const [uploadImg, { isLoading: isImgLoading }] = uploadApi.useUploadImagesMutation();

  const [uploadedImg, setUploadedImg] = useState<string>('');

  const handleImgUpload = async (e: any) => {
    const formData = new FormData();
    const file = e.target.files[0];
    if(!file) return;
    formData.append('files', file);
    uploadImg(formData)
      .unwrap()
      .then(payload => {
        setUploadedImg(payload.data);
        setIsPopOpen(true)
      })
      .catch(err => {
        setIsConditionInfoOpen(true);
        setTimeout(() => setIsConditionInfoOpen(false), 5000)
      })
    }
    
    const handleAvatarUpload = async (avatar: string) => {
      uploadAvatar(avatar)
      .unwrap()
      .then(payload => {
        setUserAvatar(payload.data);
        setIsPopOpen(false);
      })
      .catch(err => {
        setIsConditionInfoOpen(true)
        setTimeout(() => setIsConditionInfoOpen(false), 5000)
      })
  }

  return {
    handleImgUpload, handleAvatarUpload,
    isImgLoading,
    uploadedImg,
    isPopOpen, setIsPopOpen,
    isConditionInfoOpen, setIsConditionInfoOpen,
  }
}