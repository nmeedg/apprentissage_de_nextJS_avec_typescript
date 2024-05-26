"use client"
export default function Error({error,reset}:{
    error:Error,
    reset:()=>void
}) {
  return (
    <div className=" text-red-700">Error Occur: {error.message} <button onClick={reset} className=" font-bold underline"> Try Again</button>
    </div>
  )
}
