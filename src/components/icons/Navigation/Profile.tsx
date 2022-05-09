import React, { FC, ComponentProps } from 'react'

interface Props extends ComponentProps<'svg'> {
   color?: string
}

export const NavigationProfileIcon: FC<Props> = ({ color, ...props }) => (
   <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <g clipPath="url(#clip0)">
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.9223 10.2793C12.0905 10.2793 13.8482 8.52164 13.8482 6.35345C13.8482 4.18525 12.0905 2.42759 9.9223 2.42759C7.7541 2.42759 5.99643 4.18525 5.99643 6.35345C5.99643 8.52164 7.7541 10.2793 9.9223 10.2793ZM9.9223 11.7069C12.8789 11.7069 15.2757 9.31008 15.2757 6.35345C15.2757 3.39682 12.8789 1 9.9223 1C6.96567 1 4.56885 3.39682 4.56885 6.35345C4.56885 9.31008 6.96567 11.7069 9.9223 11.7069Z"
            fill={color}
         />
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.5724 21.7002H19C19 16.7296 14.9706 12.7002 10 12.7002C5.02944 12.7002 1 16.7296 1 21.7002H2.42759C2.42759 17.5181 5.81787 14.1278 10 14.1278C14.1821 14.1278 17.5724 17.5181 17.5724 21.7002Z"
            fill={color}
         />
      </g>
      <defs>
         <clipPath id="clip0">
         <rect
            width="20"
            height="20"
            fill={color}
         />
         </clipPath>
      </defs>
   </svg>
)

NavigationProfileIcon.defaultProps = {
   color: "white"
}