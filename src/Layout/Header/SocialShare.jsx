import React from "react";
import { SocialShareContainer, ShareText, FBIcon, GmailIcon, TwitterIcon} from './styled';

const SocialShare = () => {
  return (
    <SocialShareContainer>
      <ShareText>Share</ShareText>
      <FBIcon />
      <TwitterIcon />
      <GmailIcon />
    </SocialShareContainer>
  );
};

export default SocialShare;