import * as React from "react";
import { Footer2, Links, SiteData, TemplateMeta } from "../../types";
import ChatBoat from "../common/ChatBoat";


interface FooterProps {
  _site: SiteData;
  meta: TemplateMeta;
  template?: string;
  devLink?: string;
  locale?: string;
  description?: string;
}

const Footer = (props: FooterProps) => {
  const { meta, _site } = props;

  return (
    <>
      <footer className="site-footer" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className={`sr-only ${meta.mode}`}>
          Footer
        </h2>
        <div className="bg-[#102B2B] border-t-8 border-[#099E3D]">
          <div className="text-white text-center py-10">
            <span>{_site.c_footer1Title}</span>
            <h5>{_site.c_footer1Description}</h5>
            <button className="block text-black font-bold py-3 px-10 bg-white mt-7 m-auto">
              {_site.c_footer1Cta.label}
            </button>
          </div>
        </div>

        <div className="bg-[#102B2B] border-y ">
          <div className="container max-w-[75rem] mx-auto pt-10 pb-24 flex gap-24">
            {_site.c_footer2?.map((e: Footer2,index:number) => {
              return (
                <>
                  <ul className="font-semibold text-white" key={index}>
                    <li className="text-[13px] font-normal pb-8">
                      {e.linkTitle}
                    </li>
                    {e.linkUrl?.map((link: Links,index:number) => {
                      return (
                        <>
                          {link.label && link.link && (
                            <li className="pb-8" key={index}>
                              <a href={link.link}>{link.label}</a>
                            </li>
                          )}
                        </>
                      );
                    })}
                  </ul>{" "}
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-[#102B2B]">
          <div className="container max-w-[75rem] mx-auto flex">
            <div className="pt-7 pb-7 text-white w-1/2 border-r border-white">
              <p className="font-semibold ">{_site.c_footer3Title}</p>
              <button className="border border-white px-6 py-3 mt-4">
                {_site.c_footer3Cta.label}
              </button>
            </div>

            <div className="pt-7 pb-7 text-white w-1/2">
              <img
                className="h-20 ml-12 inline-block"
                src={_site.c_footer3Barcode.url}
                alt=""
              />
              <span className="ml-4">
                <a href="">{_site.c_footer3BarcodeCta.label}</a>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#102B2B] border-y p-4">
          <div className="container max-w-[75rem] mx-auto">
            <ul className="text-white flex gap-2 pt-2">
              {_site.c_footer4Links?.map((link: Links,index:number) => {
                return (
                  <>
                    {link.label && link.link && (
                      <li key={index}>
                        <a href={link.link}>{link.label}</a>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
            <p className="text-white font-medium py-4 text-sm">
              {_site.c_footer4Description}
            </p>
            <p className="text-white">{_site.c_footer4Title}</p>
          </div>
        </div>

        <div className="bg-[#102B2B]">
          <div className="flex  justify-between container max-w-[75rem] mx-auto py-7">
            <div className="flex">
              <img src={_site.c_footer5Image.url} alt="" />
              <p className="text-white pl-5">
                <a href="">{_site.c_footer5Cta.label}</a>
              </p>
            </div>

            <div className="socialmedia flex gap-8 right-0">
              <ul className="socialfoot">
                {_site.c_socialFooter?.map((sociallink: any,index:number) => {
                  return (
                    <>
                      <li key={index}>
                        <a href={sociallink.socialLink}>
                          <img
                            src={sociallink.socialImage.url}
                            width="24"
                            height="24"
                            alt=""
                          />
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <ChatBoat/>
        </div>
      </footer>
    </>
  );
};

export default Footer;
