export const HttpMessages = {
  NOT_FOUND(data?: Record<string, any>) {
    return Object.assign(
      {},
      {
        statusCode: 404,
        message: 'Not found',
      },
      data,
    )
  },
  INTERNAL_SERVER_ERROR(data?: Record<string, any>) {
    return Object.assign(
      {},
      {
        statusCode: 500,
        message: 'Internal server error',
      },
      data,
    )
  },
  CREATED(data?: Record<string, any>) {
    return Object.assign(
      {},
      {
        statusCode: 201,
        message: 'Created',
      },
      data,
    )
  },
}
