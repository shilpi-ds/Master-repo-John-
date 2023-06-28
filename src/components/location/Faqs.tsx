import * as React from "react";
import { useState } from "react";
import { LocationDocument } from "../../types";

type FaqsProps = {
  document: LocationDocument;
};

const Faqs = (props: FaqsProps) => {

  const [section, setSection] = useState(0);
  const [isActive, setIsActive] = useState("section-chat");

  const handleClick = (e: any) => {
    setSection(e.target.id);
  };

  return (
    <>
      <div className="faq's mt-[30px] flex justify-center mb-[3.75rem]">
        <div className=" w-[640px] h-[470px] relative left-12">
          <h2 className="text-[#141414] text-[40px] relative top-[0.625rem">
            {props.document.c_faqTitle}
          </h2>
          <div className="absolute w-[640px] flex flex-col justify-center mt-[2rem] top-2/4 -translate-y-2/4">
            {props.document.c_relatedFaqs.map((item, index: number) => {
              return (
                <>
                  <div
                    id={index}
                    className={`flex items-center justify-between pl-4 py-6 drop-shadow-[0_0px_1px_rgba(0,0,0,0.15)] bg-white ${
                      section == index ? isActive : ""
                    }`}
                    onClick={(e) => {
                      handleClick(e);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="flex items-center gap-[16px]">
                      <span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="6"
                            cy="6"
                            r="6"
                            fill="#141414"
                            fillOpacity="0.5"
                          />
                        </svg>
                      </span>
                      <p id={index}>{item.question}</p>
                    </div>
                    <span className="right-0 mr-8">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.6665 3.33337L13.3332 10L6.6665 16.6667"
                          stroke="#141414"
                          strokeOpacity="0.5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="bg-[#F1F6FA] w-[648px] h-[472px] rounded-2xl flex mt-[2rem]">
          <div className="w-[472px] inline-block right-0 mt-[2.5rem] ml-[9rem]">
            <p className="pt-10">
              {props.document.c_relatedFaqs[section].answer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
