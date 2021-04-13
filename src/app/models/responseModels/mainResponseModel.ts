import { ResponseModel } from "../responseModel";

export interface MainResponseModel<T> extends ResponseModel {
    data:T[];
}