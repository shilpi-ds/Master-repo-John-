import * as React from "react";
import { SiteData } from "../../types";

type BannerProps = {
  _site: SiteData;
};

const HeaderBanner = (props: BannerProps) => {
  return (
    <>
      <div className="relative">
        <img src={props._site.c_bannerImage.image.url} alt="" />
        <div className="absolute top-0 text-center mt-20 ml-44">
          <h1 className="text-white text-5xl pb-7">
            {props._site.c_bannerTitle}
          </h1>
          <span className="text-white text-xl">
            {props._site.c_bannerDescription}
          </span>
          <button className="block text-black font-bold py-3 px-10 bg-white mt-7 m-auto">
            <a href={props._site.c_bannerUrl.link}>
              {props._site.c_bannerUrl.label}
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
