import { FC, useState } from 'react'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loginHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
    } catch (err: any) {
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  const registrationHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      event.preventDefault()
      const data = await AuthService.registration({ email, password })
      if (data) {
        toast.success('Account has been created')
        setIsLogin(!isLogin)
      }
    } catch (err: any) {
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  return (
    <div className="mt-40 flex flex-col justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Login' : 'Registration'}
      </h1>

      <form
        onSubmit={isLogin ? loginHandler : registrationHandler}
        className="mx-auto flex w-1/3 flex-col gap-5"
      >
        <input
          type="text"
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-green mx-auto">Submit</button>
      </form>

      <div className="mt-5 flex justify-center">
        {isLogin ? (
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-slate-300 hover:text-white"
          >
            You don`t have an account?
          </button>
        ) : (
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-slate-300 hover:text-white"
          >
            Already have an account?
          </button>
        )}
      </div>
    </div>
  )
}

export default Auth
