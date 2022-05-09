import React, { FC, ComponentProps } from 'react'

interface Props extends ComponentProps<'svg'> {
   color?: string
}

export const NavigationMenuIcon: FC<Props> = ({ color, ...props }) => (
   <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M19 5.33333H1V4H19V5.33333Z"
         fill={color}
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M14.3333 10.6673H1V9.33398H14.3333V10.6673Z"
         fill="white"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M9.66667 15.9993H1V14.666H9.66667V15.9993Z"
         fill="white"
      />
   </svg>
)

NavigationMenuIcon.defaultProps = {
   color: "white"
}