import { ErrorEntity } from './ErrorEntity';

export class APIResponse<T> {
  data: T;
  methodName: string;
  apiVersion: string;
  error: ErrorEntity;
  isSuccess: boolean;
  message: string;

}
