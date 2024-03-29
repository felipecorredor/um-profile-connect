"use client";

import { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

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
              <div
                className="image fadeInUp delay-0-3s img-item"
                style={{ cursor: "pointer" }}
              >
                <Image
                  alt="Upload"
                  objectFit="contain"
                  width={800}
                  height={450}
                  src={value}
                />

                <div className="img-item-hover d-flex flex-column">
                  <i className="fas fa-image" />
                  <span>Cambiar foto</span>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
