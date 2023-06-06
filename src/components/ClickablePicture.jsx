import { useState } from 'react';

const ClickablePicture = (props) => {
  const [image, changeImage] = useState(props.img);

  const handleImageChange = () => {
    image === props.img
      ? changeImage(props.imgClicked)
      : changeImage(props.img);
  };

  return (
    <div className="clickablePicture" style={{}}>
      <img
        src={image}
        alt={image}
        style={{ width: '20%' }}
        onClick={handleImageChange}
      />
    </div>
  );
};

export default ClickablePicture;
