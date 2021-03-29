import SnapchatLogo from "../public/icons/snapchat.png";
import WhatsAppLogo from "../public/icons/whatsapp.png";
import LinkedInLogo from "../public/icons/linkedin.png";
import TikTokLogo from "../public/icons/tiktok.png";
import InstagramLogo from "../public/icons/instagram.png";
import VenmoLogo from "../public/icons/venmo.png";
import CashAppLogo from "../public/icons/cashapp.png";
import TwitterLogo from "../public/icons/twitter.png";
// import FacebookLogo from "../public/icons/facebook.png";
// import YouTubeLogo from "../public/icons/youtube.png";

// TODO: Add email, soundcloud, spotify, zelle
// TODO: fb & yt have variable urls
/*
  facebook: {
    title: "Facebook",
    url: "https://www.facebook.com/Telly-102665065137487",
    image: FacebookLogo,
  },
  youtube: {
    title: "YouTube",
    url: "https://www.youtube.com/c/",
    image: YouTubeLogo,
  },
*/

const config = {
  cashapp: {
    title: "Cash App",
    url: "https://cash.app/$",
    image: CashAppLogo,
  },
  instagram: {
    title: "Instagram",
    url: "https://instagram.com/",
    image: InstagramLogo,
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://linkedin.com/in/",
    image: LinkedInLogo,
  },
  snapchat: {
    title: "Snapchat",
    url: "https://snapchat.com/add/",
    image: SnapchatLogo,
  },
  twitter: {
    title: "Twitter",
    url: "https://twitter.com/",
    image: TwitterLogo,
  },
  venmo: {
    title: "Venmo",
    url: "https://venmo.com/",
    image: VenmoLogo,
  },
  whatsapp: {
    title: "WhatsApp",
    url: "https://wa.me/",
    image: WhatsAppLogo,
  },
  tiktok: {
    title: "TikTok",
    url: "https://www.tiktok.com/@",
    image: TikTokLogo,
  },
};

export default function getMetaDetails(platform, handle) {
  return {
    title: config[platform]["title"],
    url: config[platform]["url"] + handle,
    image: config[platform]["image"],
  };
}
