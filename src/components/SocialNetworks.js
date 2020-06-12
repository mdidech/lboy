import React, { Fragment } from "react";
import WhatsappBadge from "react-whatsapp-badge";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Whatsapp from "../whatsapp.png";
const SocialNetworks = () => {
  const widthScreen = window.screen.width;
  return (
    <Fragment>
      {widthScreen <= 700 ? (
        <WhatsappBadge
          text='lboy delivery à votre service'
          phone={+212613586588}
          image={Whatsapp}
        />
      ) : (
        <MessengerCustomerChat
          pageId='111125127302604'
          appId='251712059393321'
        />
      )}
    </Fragment>
  );
};
export default SocialNetworks;
