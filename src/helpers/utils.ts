export const catchPromise = async <T>(promise: Promise<T>) => {
  try {
    const res = await promise
    return [res, null]
  } catch (err: any) {
    return [null, err]
  }
}
