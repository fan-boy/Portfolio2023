"use client"
import PhotoAlbum from "react-photo-album";
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import photos from "./images";


function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        style={{"objectFit":'cover'}}
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}





export default function Gallery() {
    return <PhotoAlbum layout="masonry" spacing={10} photos={photos}
    renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{
        size: "calc(100vw - 40px)",
        sizes: [
          { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
          { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
          { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
        ],
      }}
    
    />;
}