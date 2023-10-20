export function importParser(code: string): string {
  code = code.replace(/from\s+[\'\"\`](.+)[^\'\"\`][\'\"\`]/gim, (match, k) => {
    if (!match.includes('//')) {
      match = match.replace(k, 'https://esm.sh/' + k)
    }

    return match
  })

  return code
}
