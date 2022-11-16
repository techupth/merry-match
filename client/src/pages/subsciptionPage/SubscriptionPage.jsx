import React from "react";
import FooterAuthen from "../../components/subscriptionPage/FooterAuthen";
import NavbarAuthen from "../../components/subscriptionPage/NavbarAuthen";
import Subscribe from "../../components/subscriptionPage/Subscribe";

const SubscriptionPage = () => {
  return (
    <div>
      <NavbarAuthen />
      <Subscribe />
      <FooterAuthen />
    </div>
  );
}

export default SubscriptionPage;
