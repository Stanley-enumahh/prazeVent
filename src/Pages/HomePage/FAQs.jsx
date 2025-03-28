import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FAQsData = [
  {
    question: "How do I write a review on PrazeVent?",
    answer:
      "  Writing a review is simple! Just sign up or log in, search for the business you want to review, and click “Write a Review.” Share your experience—good or bad—to help others make informed decisions.",
    id: "panel1",
  },
  {
    question: "Can I edit or delete my review after posting?",
    answer:
      "Yes! You can edit or delete your review by going to your profile, navigating to your reviews, and selecting the edit ordelete option. Keep in mind that edits should reflect genuine updates to your experience.",
    id: "panel2",
  },
  {
    question: "How does Prazevent prevent fake reviews?",
    answer:
      " We use advanced verification methods, AI moderation, and community reporting to detect and remove fake or biased reviews. Our goal is to keep reviews authentic and trustworthy.",
    id: "panel3",
  },
  {
    question: "How do I register my business on Prazevent?",
    answer:
      "To register your business, click on “Add Your Business”, provide the required details, and submit for verification. Once approved, your business will be listed, allowing customers to leave reviews.",
    id: "panel4",
  },
  {
    question: "What features does premium busniesses get?",
    answer:
      "Premium businesses enjoy added benefits like enhanced visibility, priority support, custom branding, analytics insights, and the ability to respond to reviews publicly or privately.",
    id: "panel5",
  },
];

export const FAQs = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panelId) => () => {
    setExpanded((prev) => (prev === panelId ? null : panelId));
  };

  return (
    <div className="w-full flex justify-center mb-[150px]">
      <div className="flex flex-col gap-12 w-[67%] items-center ">
        <div className="flex flex-col gap-2 text-center items-center">
          <h1 className="text-[#002B56] text-[26px] font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-[#2B323E] text-[16px] font-normal">
            Got questions? We've got answers! Find everything you need <br /> to
            know about using Prazevent.
          </p>
        </div>

        <div className="flex flex-col gap- w-full">
          {FAQsData.map((item) => (
            <li
              key={item.id}
              className={`px-8 py-10 transition w-full list-none flex flex-col gap-6 ${
                expanded === item.id
                  ? "bg-[#015CB9] rounded-2xl"
                  : "border-b border-b-[#E3E5E8] "
              } `}
            >
              <div className="flex flex-row justify-between w-full items-center">
                <h1
                  className={`text-[#002B56] font-medium text-[20px] ${
                    expanded === item.id && "text-white"
                  }`}
                >
                  {item.question}
                </h1>
                <span
                  onClick={handleChange(item.id)}
                  className="cursor-pointer transition"
                >
                  {expanded === item.id ? (
                    <IoIosArrowUp
                      className={` transitiontext-[#002B56] ${
                        expanded === item.id ? "text-white" : ""
                      }`}
                    />
                  ) : (
                    <IoIosArrowDown
                      className={`transition text-[#002B56] ${
                        expanded === item.id ? "text-white" : ""
                      }`}
                    />
                  )}
                </span>
              </div>
              {expanded === item.id && (
                <span className="text-[#E6F2FE] font-normal mb-3 transition text-sm leading-[24px]">
                  {item.answer}
                </span>
              )}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
