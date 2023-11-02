"use client";

import { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      console.log("result:::", result);
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="uqtrra6p"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div onClick={() => open?.()}>
            <span className="icon-plus" />
            <div>Click para subir la imagen de perfil</div>
            {value && (
              <div className="image">
                <img
                  alt="Upload"
                  fill
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    maxHeight: "500px",
                  }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
