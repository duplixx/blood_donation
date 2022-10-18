import React from 'react'

export default function Hero() {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://hospitalcmq.com/wp-content/uploads/2018/06/donor.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="space-x-4">
                        <h1 className="mb-5 text-8xl font-bold">We Serve for Life</h1>
                        <p className="mb-5">We will provide best solutions to fulfill medical needs</p>
                        <button className="btn bg-red-800">Donate</button>
                        <button className="btn bg-red-800">Locate</button>
                    </div>
                </div>
            </div>
        </>
    )
}
