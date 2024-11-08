import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src="/images/logo.svg"
      alt="Logo"
      width={200}
      height={200}
      {...props}
    />
  )
}
