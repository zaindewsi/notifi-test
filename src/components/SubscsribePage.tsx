import { useEffect, useState } from 'react'
import Browser from 'webextension-polyfill'
import { StopButton } from './StopButton'

export const Subscsribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    Browser.storage.local.get('isSubscribed').then(obj => {
      setIsSubscribed(obj.isSubscribed === 'true')
    })
  }, [])

  const handleClick = () => {
    setIsSubscribed(true)
    Browser.storage.local.set({ isSubscribed: 'true' })
  }

  return (
    <>
      {isSubscribed ? (
        <StopButton
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed}
        />
      ) : (
        <div className='content'>
          <button onClick={handleClick} className='button'>
            Subscribe Now
          </button>
        </div>
      )}
    </>
  )
}
