import { useRouter } from "next/router"
import RoomNav from "../../components/RoomNav"
import Notification from "../../components/notification"
import Bio from "../../components/Bio"
import Tabs from "../../components/Tabs"
import ChatLayout from "../../components/ChatLayout"
import SearchLayout from "../../components/SearchLayout"
import MessageInput from "../../components/MessageInput"
import React, { useRef, useState, useEffect } from "react"
import ChatHeader from "../../components/ChatHeader"

export default function chatroom() {
  const router = useRouter()

  const { roomId } = router.query

  return (
    <div className="font-sand">
      <head>
        <title>Conversation - {roomId}</title>
      </head>
      <RoomNav />
      <div class="flex flex-wrap overflow-hidden">
        <div class="w-1/4 overflow-hidden border-r ">
          <SearchLayout />
          <Tabs />
          <div id="messages" className="mt-4 h-100 overflow-y-scroll">
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </div>
        </div>
        <div class="w-1/2 overflow-hidden border-r ">
          <ChatHeader />
          <ChatLayout />
          <MessageInput />
        </div>

        <div class="w-1/4 overflow-hidden">
          <Bio />
          <div className="flex flex-col space-y-4 px-8 my-4 font-tweb border-b py-4 w-full">
            <div>
              <p className="text-sm font-bold text-gray-700 ">Phone number</p>
              <span className="text-sm font-medium text-gray-400">(629) 555-0193</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">Date of birth</p>
              <span className="text-sm font-medium text-gray-400">12/02/1998</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">Gender</p>
              <span className="text-sm font-medium text-gray-400">Male</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
