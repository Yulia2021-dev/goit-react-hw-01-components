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
  const userJson = profileJson;
  const statisticalData = statisticalDataJson;
  return (
    <>
      <Profile user={userJson} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsJson} />
      <TransactionHistory transactions={transactionJson} />
    </>
  );
};

export default App;
