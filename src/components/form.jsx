import React from 'react'

export default function Form() {
  return (
    <div>
          <form className="w-full p-4" id="form">
              <div className="flex flex-wrap flex-col -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                      >
                          Address
                      </label>
                      <textarea
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Address"
                      />
                      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 ">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-city"
                      >
                          Latitude
                      </label>
                      <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="text"
                          placeholder=""
                      />
                      <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-city"
                  >
                     Longitude
                  </label>
                  <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      placeholder=""
                  />
                  </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                          htmlFor="grid-city"
                      >
                          City
                      </label>
                      <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="text"
                          placeholder=""
                      />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-state"
                      >
                          State
                      </label>
                      <div className="relative">
                          <select
                              className="block appearance-none w-full bg-gray-200 border-2 border-gray-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                          >
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                          </select>
                      </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-zip"
                      >
                          Zip
                      </label>
                      <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="text"
                          placeholder={90210}
                      />
                  </div>
              </div>
              
              <a href="#my-modal-2" className='btn btn-outline w-full flex-end mt-15'>
              Submit
                </a>
          </form>
  <div className="modal" id="my-modal-2">
    <div className="modal-box">
      <h3 className="font-bold text-lg">
        Congratulations Your Location has been added !!
        We will contact you shortly!!
      </h3>
      <center>
      <lottie-player
  src="https://assets5.lottiefiles.com/packages/lf20_rapsgnzz.json"
  speed={1}
  style={{ width: 300, height: 300 }}
  loop=""
  className="justify-center"

  autoPlay=""
/>
</center>
      <div className="modal-action">
        <a href="#" className="btn">
          Yay!
        </a>
      </div>
    </div>
  </div>
  
    </div>
  )
}
