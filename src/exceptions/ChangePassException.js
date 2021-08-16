import * as ErrorCode from "../constants/ErrorCode";

export function changePassFailException(error) {
  if (error.response.data.message !== undefined) {
    if (error.response.data.message === ErrorCode.ERR_USER_NOT_FOUND) {
      return "User not found";
    }
    if (error.response.data.message === ErrorCode.ERR_PASSWORD_NOT_CORRECT) {
      return "Old password not correct";
    }
    if (error.response.data.message === ErrorCode.ERR_PASSWORD_IS_EMPTY) {
      return "Password cannot empty";
    }
    if (error.response.data.message === ErrorCode.ERR_SAME_PASSWORD) {
      return "Password are the same";
    }
    if (error.response.data.message === ErrorCode.ERR_CHANGE_PASSWORD) {
      return "Fail to change password, try again later";
    }
    return error.response.data.message;
  }
  return "Fail to change password, try again later";
}
