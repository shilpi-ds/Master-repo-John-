import * as React from "react";
import { Link } from "@yext/pages/components";
import { SiteData, TemplateMeta, Links } from "../../types";

interface HeaderProps {
  _site: SiteData;
  meta: TemplateMeta;
  template?: string;
  devLink?: string;
  locale?: string;
}

const Header = (props: HeaderProps) => {
  const { meta, _site } = props;

  return (
    <header className={`site-header ${meta.mode}`}>
      <div className="bg-[#102B2B] text-white text-sm flex justify-between items-center border-b-8 border-[#099E3D]">
        <ul className="flex ml-4 py-2 gap-3 ">
          {_site.c_headerTopMenus?.map((top: Links,index:number) => {
            return (
              <>
                {top.link && top.label && (
                  <li key={index}>
                    <Link href={top.link} className="">
                      {top.label}
                    </Link>
                  </li>
                )}
              </>
            );
          })}
        </ul>
        {_site.c_freeDelivery.link && (
          <div className="flex mr-24 gap-3">
            <span>
              <a href={_site.c_freeDelivery.link}>
                {_site.c_freeDelivery.label}
              </a>
            </span>
            
          </div>
        )}
      </div>

      <div>
        <div className="container max-w-[75rem] mx-auto py-7">
          <a href="#" className="">
            <img
              src={_site.c_johnLogo.image.url}
              alt={
                _site.c_johnLogo.alternateText
                  ? _site.c_johnLogo.alternateText
                  : "John Lewis Logo"
              }
              title="John Lewis"
              className="h-8"
            />
          </a>
        </div>
      </div>

      <div className=" border-b">
        <div className="container max-w-[75rem] mx-auto py-4 font-medium">
          <ul className="headermenus flex ml-4 py-2 gap-7 ">
            {_site.c_headerMenus?.map((e: Links,index:number) => {
              return (
                <>
                  {e.link && e.label && (
                    <li key={index}>
                      <Link href={e.link} className="">
                        {e.label}
                      </Link>
                    </li>
                  )}
                </>
              );
            })}
            {/* <span className="text-[#DB003E] font-bold ">
                        <li>Sale & Offers</li>
                    </span> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
