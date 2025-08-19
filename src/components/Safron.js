import React from 'react'
import Bg from "../assets/sa1.png"


function Safron() {
  return (
            <div className="card shadow-lg bg-white-100 w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="text-center pt-20 uppercase text-6xl text-white">
                    <h1>Saffron</h1>
                </div>
            </div>
  )
}

export default Safron
