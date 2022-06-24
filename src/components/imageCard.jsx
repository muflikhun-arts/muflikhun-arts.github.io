import { memo } from "react"


const ImageCard = ({ title, src, ...props }) => {

  return (
    <img src={require(`../images/${src}`)} alt={title} {...props} />
  );
}

export default memo(ImageCard);