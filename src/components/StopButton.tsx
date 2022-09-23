import { gql, useSubscription } from '@apollo/client'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Browser from 'webextension-polyfill'

const MESSAGE_SUBSCRIPTION = gql`
  subscription test {
    messageReceived {
      conversationId
      createdDate
      message
      userId
    }
  }
`

interface StopButtonProps {
  isSubscribed: boolean
  setIsSubscribed: Dispatch<SetStateAction<boolean>>
}

export const StopButton = ({
  setIsSubscribed,
  isSubscribed,
}: StopButtonProps) => {
  const { data } = useSubscription(MESSAGE_SUBSCRIPTION)

  useEffect(() => {
    if (data) {
      Browser.storage.local.get('isSubscribed').then(async obj => {
        if (obj.isSubscribed === 'true') {
          await Browser.notifications.create('New Message', {
            type: 'basic',
            title: 'New Message',
            message: data.messageReceived.message as string,
            iconUrl: '/logo48.png',
          })
        }
      })
    }
  }, [data, isSubscribed])

  const unsubscribe = () => {
    setIsSubscribed(false)
    Browser.storage.local.set({ isSubscribed: 'false' })
  }

  return (
    <div className='content'>
      <Link to={'/'}>
        <button onClick={unsubscribe} className='button'>
          Stop Notifications
        </button>
      </Link>
    </div>
  )
}
