import { BrowserRouter, Link, useNavigate } from 'react-router-dom'
import Browser from 'webextension-polyfill'

export const Start = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    Browser.permissions
      .request({ permissions: ['notifications'] })
      .then(permission => {
        if (permission) {
          navigate('/subscribe')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='content'>
      <h2 className='title'>Notifications for you</h2>
      <p className='text'>Click below to enable permissions and get started</p>
      <Link to={'/subscribe'}>
        <button onClick={handleClick} className='button'>
          Get Started
        </button>
      </Link>
    </div>
  )
}
