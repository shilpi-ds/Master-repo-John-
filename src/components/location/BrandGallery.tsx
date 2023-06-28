import * as React from "react";
import { LocationDocument ,BrandGalleries} from "../../types";
//import gallerybg from "../../images/bg-service.jpg"

type BrandGalleryProps = {
  document: LocationDocument;
};

const BrandGallery = (props: BrandGalleryProps) => {
  const { document } = props;

  const photos = document.c_brandGallery.map((element: BrandGalleries,index:number) => {
    return (
      <>
        <div key={index} className="rounded-tl-[20px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[70px] max-w-[18.813rem] bg-white shadow-md p-3">
          <a href="">
            <img
              className="rounded-tl-[20px] rounded-tr-[70px] rounded-br-[20px] rounded-bl-[70px]"
              src={element.url}
              alt=""
            />
          </a>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mb-[60px] text-[40px]">
        <p className="text-center">{document.c_brandTitle}</p>
        <div className="flex flex-wrap max-w-[1320px] m-auto gap-[2.313rem] gap-y-[4.375rem] mt-10 items-center">
          {photos}
        </div>
      </div>
    </>
  );
};

export default BrandGallery;
