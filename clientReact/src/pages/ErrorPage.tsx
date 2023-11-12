import { FC } from 'react'
import errorPageImg from '../assets/page_not_found.png'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 font-roboto text-white">
      <img src={errorPageImg} alt="error" />
      <Link
        to={'/'}
        className="rounded-md bg-slate-900 px-6 py-2 hover:bg-sky-600"
      >
        Back
      </Link>
    </div>
  )
}

export default ErrorPage
