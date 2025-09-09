import { useState } from "react";

const What = () => {

    const[hovered, setHovered] = useState(false);

  return (
    <>
    <div className='text-center text-gray-600 my-20 text-3xl font-bold inter hover:scale-200 transition-transform duration-300 cursor-default'>
        What's happening here?
    </div>
    </>
  )
}

export default What