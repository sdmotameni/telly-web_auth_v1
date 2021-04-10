import config from "../config.json";

export default function getMetaDetails(platform, handle) {
  return {
    title: config[platform]["title"],
    url: config[platform]["url"] + handle,
    image: config[platform]["image"],
  };
}
