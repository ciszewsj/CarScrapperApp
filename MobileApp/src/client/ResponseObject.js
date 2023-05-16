export class ResponseObject {
  constructor(code, body) {
    this.code = code;
    this.body = body;
  }
}

export const Statuses = {
  SUCCESS: "Success",
  FAILURE: "Failure",
  VALIDATION_ERROR: "Validation Error",
};
