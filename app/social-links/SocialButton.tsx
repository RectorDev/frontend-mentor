import React from 'react'

export default function SocialButton({title="button"}:{title?:string}) {
  return (
    <button className='rounded-md bg-[#333333] text-[15px] w-full py-3.5 font-bold font-inter hover:bg-[#c4f82a] duration-200 transition-colors'>{title}</button>
  )
}
