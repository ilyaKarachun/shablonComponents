import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatarFriend from './avatar.jpeg'
import avatarMy from './withCup.jpg'

export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    },
    message: {
        text: string
        time: string
    },
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatarMy,
        name: 'Ilya Karachun',
    },
    message: {
        text: 'Hi, Pasha! I have some work for u',
        time: '00 : 12',
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatarFriend,
        name: 'Pashka Durov',
    },
    message: {
        text: 'Its good news. Im free now!',
        time: '00 : 14',
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Chat</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
