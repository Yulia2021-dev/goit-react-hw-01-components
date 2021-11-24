import React from "react";
import Profile from "./components/Profile/Profile";
import profileJson from "./mocks/profile.json";
import FriendList from "./components/FriendList/FriendList";
import friendsJson from "./mocks/friendList.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalDataJson from "./mocks/statistical-data.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactionJson from "./mocks/transactions.json";

import "./App.css";
import "./index.css";

const App = () => {
  const { username, tag, location, avatar, stats } = profileJson;
  const statisticalData = statisticalDataJson;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsJson} />
      <TransactionHistory transactions={transactionJson} />
    </>
  );
};

export default App;
