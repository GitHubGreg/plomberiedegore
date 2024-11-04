import Image from 'next/image'
import logo from '@/images/logo.svg'

export function Logo(props) {
  return <Image src={logo} alt="Logo" {...props} />
}
