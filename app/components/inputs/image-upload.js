"use client";

import { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";

const ImageUpload = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result) => {
      if (result) {
        onChange(result.info.secure_url);
      }
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
            {!value && (
              <div className="upload-profile">
                <ul className="author-date-enroll">
                  <li>
                    <i className="fas fa-cloud-upload-alt" />
                    Click para subir la imagen de perfil
                  </li>
                </ul>
              </div>
            )}

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
