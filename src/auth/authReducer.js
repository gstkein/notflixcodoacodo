import React, {useState, useEffect} from 'react';
import types from '../types/types';


export const authInitState = {
  user: null,
  isAuthenticated: false,
}

export const authReducer = (state = authInitState, action) => {
  switch (action.type) {
    case types.AUTH.LOGIN: 
      return {...state,
          user : action.payload.user,
          isAuthenticated : true,
      };
    case types.AUTH.LOGOUT: 
    return  {...state,
        user: null,
        isAuthenticated : false,
    };
    default:
      return state;
  }
}