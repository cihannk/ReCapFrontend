import { Car } from "../car";
import { ResponseModel } from "../responseModel";

export interface SingleCarResponseModel extends ResponseModel{
    data:Car;
}