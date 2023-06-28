import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RtfConverter from "@yext/rtf-converter";
import "@splidejs/react-splide/css";
import { LocationDocument, OfferSection } from "../../types";

type OfferProps = {
  document: LocationDocument;
};

const OfferSlider = (props: OfferProps) => {
  const { document } = props;
  const photos = document.c_offers.map(
    (element: OfferSection, index: number) => (
      <SplideSlide key={index}>
          <div className="sale_banner grid grid-cols-2 h-[730px] w-[100%] mb-[60px]">
            <div className="w-[full]">
              <img src={element.offerImage.url} alt="" />
            </div>
            <div className="w-[full] bg-[#102b2b] text-center text-white flex justify-center items-center">
              <div className="">
                <h2 className="text-7xl font-semibold">{element.offerTitle}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: RtfConverter.toHTML(element.offerDes),
                  }}
                  className="text-center font-semibold text-5xl mt-[91px]"
                />

                {/* <p className="text-center font-semibold text-5xl mt-[91px]">{element.offerDes}</p> */}
                {/* <p className="text-5xl font-semibold pt-9">50% - 80% off</p> */}
                <button className="border border-white text-lg px-9 py-3 mt-[4.688rem]">
                  <a href={element.offerCta.link}>{element.offerCta.label}</a>
                </button>
              </div>
            </div>
          </div>
        </SplideSlide>
      )
  );

  return (
    <Splide
      aria-label="Photo Slider"
      options={{
        rewind: true,
        width: "100%",
        gap: "1rem",
        type: "loop",
        perPage: 1,
        perMove: 1,
        arrows: false,
        drag: true,
        pagination: true,
      }}
    >
      {photos}
    </Splide>
  );
};

export default OfferSlider;
