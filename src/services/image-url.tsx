import defaultImage from "../assets/defaultImage.png";

export const getCroppedImageUrl = (url: string) => {
  if (!url) return defaultImage;
  let target = "media/";
  let index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
