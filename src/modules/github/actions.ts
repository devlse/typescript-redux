import { AxiosError } from "axios"; // AxiosError: axios 에서 에러가 발생헀을 때 사용하는 에러 객체 타입
import { createAsyncAction } from "typesafe-actions"; // createAsyncAction: 비동기 작업에 관한 액션을 선언할 때 쉽게 만들어주는 유틸 함수
import { GithubProfile } from "../../api/github";


// 액션타입 선언
// Thunk 함수에서 dispatch 할 액션 준비
// 1. 요청이 시작했을 때
// 2. 요청이 성공했을 때
// 3. 요청이 실패했을 때
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// 각 액션의 타입 작성 - Generic 으로 각 액션의 payload 에 대한 타입을 순서대로 작성
export const getUserProfileAsync = createAsyncAction(
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();