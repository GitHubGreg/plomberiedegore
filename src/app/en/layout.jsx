import { siteContent } from '@/content/siteContent'

export const metadata = {
  title: 'Gore Plumbing',
  description: siteContent.en.description,
}

export default function EnglishLayout({ children }) {
  return <div lang="en">{children}</div>
}
