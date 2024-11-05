import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

const iconMap = {
  phone: PhoneIcon,
  email: EnvelopeIcon,
  address: MapPinIcon,
}

export function ContactLink({ type, href, children, external }) {
  const Icon = iconMap[type]

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div className="group flex flex-col items-center">
      <a
        href={href}
        className="mb-4 inline-flex rounded-full bg-gray-600 p-3 transition-colors hover:bg-gray-900 group-hover:bg-gray-900"
        {...linkProps}
      >
        <Icon className="h-6 w-6 text-white" />
      </a>
      <a
        href={href}
        className="text-center text-lg font-medium text-gray-600 transition-colors hover:text-gray-900 group-hover:text-gray-900"
        {...linkProps}
      >
        {children}
      </a>
    </div>
  )
}
