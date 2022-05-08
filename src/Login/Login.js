import React from 'react'

const Login = () => {
  return (
      <>          
        <div class="flex justify-center items-center h-screen bg-black text-white ">
          <div class="flex flex-col">
            <div class="flex-row text-center text-4xl font-bold">
              <h1>Login</h1>
            </div>
            <div class="flex text-2xl text-center my-5 ">
              <form action="#">
                <div class="flex flex-col items-center space-y-5">
                    <label for="username">Username</label>                 
                    <input id="username" 
                      class="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3"
                      placeholder="username..." type="text" name="username"/>
                    <label for="password">Password</label>
                    <input id="password" 
                      class="rounded-xl bg-black text-white border-2 border-blue-900 indent-3 shadow-md shadow-blue-900/50 hover:border-blue-600 hover:border-3" 
                      placeholder="**********" type="password" name="password"/>
                </div>
                <div class="mt-10">              
                  <button type="submit" class="bg-purple-700 rounded-full py-1 px-20 hover:bg-blue-600">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    
  )
}

export default Login;