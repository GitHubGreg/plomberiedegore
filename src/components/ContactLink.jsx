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
        className="inline-flex rounded-full bg-gradient-to-br from-[#0C5788] to-[#001847] p-3 transition-all hover:from-[#0A4E7A] hover:to-[#001335] group-hover:from-[#0A4E7A] group-hover:to-[#001335]"
        {...linkProps}
      >
        <Icon className="h-6 w-6 text-white" />
      </a>
      <a
        href={href}
        className="pt-4 text-center text-lg font-medium text-gray-900 transition-all hover:text-gray-600 group-hover:text-gray-600"
        {...linkProps}
      >
        {children}
      </a>
    </div>
  )
}
