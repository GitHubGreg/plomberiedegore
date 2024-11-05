import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border outline-2 outline-offset-2 transition-colors',
}

const sizeStyles = {
  small: 'py-2 px-3 text-sm',
  medium: 'py-2.5 px-4 text-sm lg:text-xs xl:text-sm',
  large: 'py-4 px-8 text-lg',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70 transition-colors',
    gray: 'bg-gray-900 text-white hover:bg-gray-600 active:bg-gray-600 active:text-white/80 transition-colors',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 transition-colors',
    white:
      'bg-white text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 transition-colors',
  },
}

export function Button({ className, size = 'medium', ...props }) {
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

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
