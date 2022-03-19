import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Dionysus'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle}`
  }
  return `${title}`
}
