'use client'




import InputComponent from '@/Components/FormElements/InputComponent'
import { loginFormControls } from '@/utils'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {

  const router = useRouter()
  return (

    <div className=' bg-white relative text-black'>
      <div className=' flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row'>
        <div className=' flex flex-col justify-center item-center w-full pr-10 pl-10 lg:flex-row'>
          <div className=' w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12'>
            <div className=' flex flex-col items-center justify-start p-10 bg-white shadow-2xl rounded-xl relative z-10'>
              <p className=' w-full text-4xl font-medium text-center font-serif'>
                Login

              </p>


              <div className=' w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                {
                  loginFormControls.map(controlItems =>
                    controlItems.componentType === 'input' ? (
                      <InputComponent
                        type={controlItems.type}
                        placeholder={controlItems.placeholder}
                        label={controlItems.label}
                      />
                    ) : null
                  )
                }
                <button
                  className=' mt-4 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide'
                >
                  Login
                </button>
                <div className=' flex flex-col gap-2'>
                  <p>New to Website ?</p>
                  <button
                    className=' mt-4 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide'
                    onClick={() => router.push('/register')}
                  >
                    Register
                  </button>

                </div>
              </div>


            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Login