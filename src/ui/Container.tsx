import React ,{ReactNode} from 'react'
import { twMerge } from 'tailwind-merge';

interface Props{
    children: ReactNode;
    className?:string
}
export default function Container({children,className}:Props) {
    const Newclassname=twMerge("max-w-screen-xl mx-auto py-10 px-4 lg:px-0 bg-red-300",className)
  return (
    <div className={Newclassname}>
      {children}
    </div>
  )
}
