import { useState, useEffect } from 'react'

import { useActions } from "../redux-hooks/useActions";
import { useAppSelector } from "../redux-hooks/useAppSelector";

import { authApi } from '../../store/api/authApi';

export const useCheckAuth = (setIsConditionInfoOpen: any , setConditionInfoMessage: any) => {
  const { authCheck: authCheckStore } = useActions();

  const [authCheck, { data, isLoading: isLoadingAuth }] = authApi.useLazyCheckAuthQuery();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      authCheck()
      .unwrap()
      .then(payload => authCheckStore(payload))
      .catch(err => {
        if(err) {
          console.log(err);
          setIsConditionInfoOpen(true);
          setConditionInfoMessage('Прошло много времени с вашей последней авторизации, авторизуйтесь заново.')
        }
      });
    }
  }, [])

  return {
    isLoadingAuth
  }
}