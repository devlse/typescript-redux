import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions";


// export function getUserProfileThunk(username: string) {
//     return async (dispatch: Dispatch) => {
//         const { request, success, failure } = getUserProfileAsync;
//         dispatch(request()); // 액션이 시작됐음을 알림
//         try {
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile))
//         } catch (e) {
//             dispatch(failure(e));
//         }

//     }
// }

export const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
)
