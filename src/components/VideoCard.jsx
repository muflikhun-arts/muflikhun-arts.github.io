import { memo } from "react"


const VideoCard = ({ title, src, ...props }) => {

  return (
    <video src={require(`../images/${src}`)} {...props} />
  );
}

export default memo(VideoCard);