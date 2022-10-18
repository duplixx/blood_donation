import React from 'react';

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-red-700">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img src="https://media.istockphoto.com/vectors/donate-drop-blood-sign-with-cross-vector-id935701978?k=20&m=935701978&s=612x612&w=0&h=Rc9h6NeuMkJYo2JL41k94wKMdnPRU2YBo7BAt_zYWMA=" alt="..." className='w-[40px] rounded-3xl m-1'></img>Blood Donation</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Donate</a></li>
                        <li><a>Volunteer</a></li>
                    </ul>
                </div>
            </div>

        </>
        
    )
}
