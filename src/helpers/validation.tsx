export function slugValidator(value: string) {
  const isValid = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)
  if (!isValid) {
    return 'Must be URL friendly'
  }
  return true
}
