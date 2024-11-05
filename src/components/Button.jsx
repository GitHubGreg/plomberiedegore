import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg font-semibold outline-2 outline-offset-2 transition-all items-center justify-center text-center',
  outline:
    'inline-flex justify-center rounded-lg border outline-2 outline-offset-2 transition-all items-center justify-center text-center',
}

const sizeStyles = {
  xsmall: 'py-2 px-3 text-xs',
  small: 'py-2 px-3 text-sm',
  medium: 'py-2.5 px-4 text-sm lg:text-xs xl:text-sm',
  large: 'py-4 px-8 text-lg',
  responsive:
    'py-2 px-3 text-sm lg:py-2 lg:px-3 lg:text-xs xl:py-2 xl:px-3 xl:text-sm',
}

const variantStyles = {
  solid: {
    blueGradient:
      'relative overflow-hidden bg-gradient-to-br from-[#0C5788] to-[#001847] text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:opacity-90 active:text-white/80 before:transition-all',
    gray: 'bg-gray-900 text-white hover:bg-gray-600 active:bg-gray-600 active:text-white/80',
  },
  outline: {
    white:
      'bg-white text-gray-700 hover:border-gray-400 data-[active=true]:bg-gray-200 data-[active=true]:border-gray-400',
  },
}

export function Button({
  className,
  size = 'medium',
  isActive = false,
  ...props
}) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    sizeStyles[size],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  const buttonProps = {
    ...props,
    className,
    'data-active': isActive,
  }

  return typeof props.href === 'undefined' ? (
    <button {...buttonProps} />
  ) : (
    <Link {...buttonProps} />
  )
}
