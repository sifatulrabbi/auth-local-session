export class Exception extends Error implements Types.Exception {
  constructor(public statusCode: number, public message: string, public name: string) {
    super(message);

    this.statusCode = statusCode;
    this.name = name;
  }
}

export class BadRequestException extends Exception {
  constructor(public message: string = 'Bad request', public name: string) {
    super(400, message, name);
  }
}

export class NotFoundException extends Exception {
  constructor(public message: string = 'Not found', public name: string) {
    super(404, message, name);
  }
}

export class UnauthorizedException extends Exception {
  constructor(public message: string = 'Unauthorized', public name: string) {
    super(401, message, name);
  }
}

export class InternalErrorException extends Exception {
  constructor(public message: string = 'Internal error', public name: string) {
    super(401, message, name);
  }
}
