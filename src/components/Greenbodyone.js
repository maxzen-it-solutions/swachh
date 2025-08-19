import React from 'react'
import sideone from "../assets/SA1.webp"
import sidetqo from "../assets/SH2.png"
import vec1 from "../assets/icon3.png"

function Greenbodyone() {
  return (
   <div className="card shadow-lg bg-[#667D60] w-full h-screen flex flex-row justify-between  gap-5" >
                <div className="flex flex-col justify-center text-white pl-12 space-y-2">
                    <div className="text-3xl font-bold">
                        Go Organic
                    </div>
                    <div className="text-2xl">
                        It’s always better when it’s natural. Eat organic & be healthy
                    </div>
                    
                    <div>
                        <ul className="text-2xl font-semibold">
                            <li>Donec feugiat ipsum sed enim ullamcorper</li>
                            <li>-Nullam fermentum vel odio ac congue</li>
                            <li>-Praesent tincidunt ante auctor tellus dictum</li>
                            <li>Suspendisse posuere vel massa quis sodale</li>
                        </ul>
                    </div>

                 
                </div>
                
                <div className="flex-1 mt-40 relative flex justify-center gap-10 items-center mr-10">

                       <div className='flex justify-end mt-60'>
                    <img className='w-36 h-28'
                        src={vec1} alt=""
                    />
                </div>
                    {/* Back Image */}
                    <div className="relative flex gap-6 items-center">
  {/* Back Image */}
  <div className="relative flex gap-6 items-center">
  {/* Back Image */}
  <div className="w-80 h-96 rounded-xl overflow-hidden">
    <img
      src={sidetqo}
      alt="Shilajit"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Front Image */}
  <div className="w-80 h-96 rounded-xl overflow-hidden shadow-lg z-10">
    <img
      src={sideone}
      alt="Saffron"
      className="w-full h-full object-cover"
    />
  </div>
</div>

</div>


                    
                </div>

            </div>
  )
}

export default Greenbodyone
