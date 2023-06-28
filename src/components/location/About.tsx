import * as React from "react";
import { LocationDocument } from "../../types";

type AboutProps = {
  document: LocationDocument;
 
};

const About = (props: AboutProps) => {
  const { document } = props;
 
  return (
    <>
     <div className="flex mt-[60px] items-center gap-12 justify-center">
        <div className="Content max-w-[40.875rem]">
        {document.c_title &&
            <h1 className=" text-[40px]">{document.c_title}</h1>
        }
        {document.description &&
            <p className="pt-7 pb-[50px]">{document.description}
            </p>
        }
            {document.c_seoCta.link && document.c_seoCta.label?
            <button className="bg-[#141414] text-white px-7 py-2"><a className="" href={document.c_seoCta.link}>{document.c_seoCta.label}</a></button>
            : ''}
        </div>
        {(document.c_backImage.url) && (document.c_mainImage.url) &&
        <div className="images flex relative">
            <div className=""><img className="w-[34.662rem] h-[25.044rem] rounded-2xl" src={document.c_backImage.url} alt=""/></div>
            <div className="" ><img className="w-[34.662rem] h-[25.044rem] object-cover absolute top-10 right-[34px] rounded-xl" src={document.c_mainImage.url} alt=""/></div>
        </div>
         } 
    </div>
    </>
  );
};

export default About;