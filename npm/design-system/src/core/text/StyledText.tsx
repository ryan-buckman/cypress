import * as React from 'react'
import cs from 'classnames'

import { LineHeight, TextSize } from '../../css'

export interface StyledTextProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  className?: string

  /**
   * Defaults to 'm'
   */
  size?: TextSize

  /**
   * Defaults to 'normal'
   */
  lineHeight?: LineHeight
}

// Named "StyledText" instead of "Text" to avoid collision with top level React type
export const StyledText: React.FC<StyledTextProps> = ({ className, size, lineHeight, children, ...props }) => {
  return (
    <span {...props} className={cs(styledTextSizeClassNames(size, lineHeight), className)}>
      {children}
    </span>
  )
}

export const styledTextSizeClassNames = (size: TextSize = 'm', lineHeight: LineHeight = 'normal'): string =>
  `${textSizeToClassName(size)} ${lineHeightToClassName(lineHeight)}`

export const textSizeToClassName = (size: TextSize): string => `text-${size}`

const lineHeightToClassName = (lineHeight: LineHeight): string => `line-height-${lineHeight}`
