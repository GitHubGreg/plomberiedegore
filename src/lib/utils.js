export function getLocalizedPath(path, language) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // If we're in English and the path doesn't start with 'en', add it
  if (language === 'en' && !cleanPath.startsWith('en/') && cleanPath !== 'en') {
    return `/${cleanPath ? `en/${cleanPath}` : 'en'}`
  }

  // If we're in French and the path starts with 'en', remove it
  if (
    language === 'fr' &&
    (cleanPath.startsWith('en/') || cleanPath === 'en')
  ) {
    return `/${cleanPath.replace(/^en\/?/, '')}`
  }

  // Otherwise, just ensure there's a leading slash
  return `/${cleanPath}`
}
