import { useState } from "react";

const What = () => {

    const[hovered, setHovered] = useState(false);

  return (
    <>
    <div className='text-center text-gray-600 mt-20 text-3xl font-bold inter hover:text-7xl transition-all duration-300 cursor-default'>
        What's happening here?
    </div>
    </>
  )
}

export default What