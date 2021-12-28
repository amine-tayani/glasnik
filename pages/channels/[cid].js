/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import UserAvatar from "../../components/shared/UserAvatar";
import AddFriendModal from "../../components/Friend/AddFriendModal";
import Sidenav from "../../components/channel/Sidenav";
import { GET_SINGLE_COMMUNITY } from "../../graphql/queries/community";
import { GET_COMMUNITY_MESSAGES } from "../../graphql/queries/message";
import { CREATE_MESSAGE } from "../../graphql/mutations/message";
import { ON_NEW_MESSAGE } from "../../graphql/subscriptions/onMessage";
import { useAuth } from "../../utils/auth/check-auth";
import ChatLayout from "../../components/channel/ChatLayout";
import MembersPane from "../../components/channel/MembersPane";

const channel = () => {
  const router = useRouter();
  const { cid } = router.query;
  const { user, loading: userLoading } = useAuth();
  const [createMessage] = useMutation(CREATE_MESSAGE);

  const { loading, data } = useQuery(GET_SINGLE_COMMUNITY, {
    fetchPolicy: "cache",
    variables: { communityId: cid },
  });

  const {
    loading: pending,
    subscribeToMore,
    data: msgData,
    error,
  } = useQuery(GET_COMMUNITY_MESSAGES, {
    fetchPolicy: "cache",
    variables: { communityId: cid },
  });

  const sendMessageToChat = async (data) => {
    try {
      await createMessage({
        variables: { communityId: cid, text: data.message },
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  // subscription to community messages
  useEffect(() => {
    subscribeToMore({
      document: ON_NEW_MESSAGE,
      onError: (err) => console.log(err),
      updateQuery: (oldMessages, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return oldMessages;
        }
        const newMessage = subscriptionData.data.onMessage;
        return {
          getMessages: [...oldMessages.getMessages, newMessage],
        };
      },
    });
  }, []);

  if (error) {
    console.log(error?.networkError.result);
  }

  return (
    <div className="flex bg-[#202225]">
      <Head>
        <title>
          {userLoading
            ? "loading "
            : router.asPath !== "/channels/me"
            ? ` ${data?.community.name} `
            : ` ${user?.username} `}
          - Glasnik
        </title>
      </Head>
      <Sidenav prop={user} />
      <div className="font-inter w-1/6 bg-[#2F3136] relative ">
        <div className="mx-4 mt-10">
          <AddFriendModal />
          <div className="flex flex-col space-y-2 transition duration-300 ease-in-out">
            {user?.friends.length !== 0
              ? user?.friends.map((friend) => (
                  <UserAvatar key={friend.id} infos={friend} />
                ))
              : user?.friendOf.map((friend) => (
                  <UserAvatar key={friend.id} infos={friend} />
                ))}
          </div>
        </div>
      </div>
      {cid !== "me" && (
        <>
          <ChatLayout
            currentUser={user}
            msgData={msgData}
            loading={pending}
            sendMessage={sendMessageToChat}
          />
          <MembersPane data={data} user={user} loading={loading} />
        </>
      )}
    </div>
  );
};

export default channel;
