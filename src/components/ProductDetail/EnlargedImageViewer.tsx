// EnlargedImageViewer.tsx
import React from "react";
import PropsImage from "../../utils/PropsImage";

const EnlargedImageViewer: React.FC<PropsImage> = ({
  image,
  handleCloseEnlargedImage,
}) => {
  return (
    <div
      className="enlarged-image-container"
      onClick={handleCloseEnlargedImage}>
      <div className="enlarged-image-wrapper">
        <img src={image} alt="Enlarged" className="enlarged-image" />
      </div>
    </div>
  );
};

export default EnlargedImageViewer;
