import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaBtc, FaSignOutAlt } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { useAuth } from '../hooks/useAuth'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper'

const Header: FC = () => {
  const isAuth = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    removeTokenFromLocalStorage('token')
    toast.success('You logged out.')
    navigate('/')
  }

  return (
    <header className="flex items-center justify-between bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <FaBtc size={20} />
      </Link>

      {/* Menu */}
      {isAuth && (
        <nav className="m-auto mr-10 ">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive ? 'text-white' : 'text-white/50'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/transactions'}
                className={({ isActive }) =>
                  isActive ? 'text-white' : 'text-white/50'
                }
              >
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/categories'}
                className={({ isActive }) =>
                  isActive ? 'text-white' : 'text-white/50'
                }
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/* Actions */}
      {isAuth ? (
        <button 
          onClick={logoutHandler}
          className="btn btn-red"
        >
          <span>Log Out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link to={'auth'} className="py-2 text-white/50 hover:text-white">
          Log in / Sign in
        </Link>
      )}
    </header>
  )
}

export default Header
