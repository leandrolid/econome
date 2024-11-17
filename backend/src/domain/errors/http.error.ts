export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
  ) {
    super(message)
    this.name = 'HttpError'
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
    }
  }
}
