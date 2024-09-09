"use client";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HubspotIcon from "@/assets/hubspot.svg";

export const FeaturesIncluded = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const featuresToPriceList = [
    { name: 'CRM & pipeline management', price: '$99/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Unlimited sales funnels', price: '$279/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Website builder', price: '$29/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Surveys & forms', price: '$49/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Email marketing', price: '$99/Monthly', SoftwareIcon: HubspotIcon },
    { name: '2- way SMS marketing', price: '$99/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Booking & appointments', price: '$29/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Workflow automation', price: '$169/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Course/Products', price: '$99/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Reputation management', price: '$299/Monthly', SoftwareIcon: HubspotIcon },
    { name: 'Total', price: '$1412/Monthly', SoftwareIcon: null },
  ]

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Why we are the best</div>
          </div>
          <h2 className="section-title mt-5">
            The Tools We Replace
          </h2>
          <p className="section-description mt-5">
            How much you would&apos;ve paid if you didn&apos;t have us
          </p>
        </div>
        <div className="relative">
          <div className="overflow-x-auto mt-10">
            <table className="table-auto w-full text-sm text-black/60">
              <thead>
                <tr>
                  <th className="px-4 py-2 font-medium text-left text-[#010D3E]">Features</th>
                  <th className="px-4 py-2 font-medium text-left text-[#010D3E]">Softwares</th>
                  <th className="px-4 py-2 font-medium text-left text-[#010D3E]">Price</th>
                  <th className="px-4 py-2 font-medium text-left text-[#010D3E]">Our Software</th>
                </tr>
              </thead>
              <tbody className="odd:bg-white">
                {featuresToPriceList.map(({ name, price, SoftwareIcon }, index) => (
                  <tr key={index}>
                    <td className={`px-4 py-2 border-t border-b border-[#EAEAEA] ${name === 'Total' ? 'font-bold text-[#010D3E]' : ''}`}>
                      {name}
                    </td>
                    <td className="px-4 py-2 border-t border-b border-[#EAEAEA]">
                      {SoftwareIcon && <SoftwareIcon className="h-[24px] w-[24px] object-contain"/>}
                      {/* <Image src={leadpages} alt="Software Icon" className="h-[24px] w-[24px] object-contain" /> */}
                    </td>
                    <td className={`px-4 py-2 border-t border-b border-[#EAEAEA]  ${name === 'Total' ? 'font-bold text-[#010D3E]' : ''}`}>
                      {price}
                    </td>
                    <td className="px-4 py-2 border-t border-b border-[#EAEAEA] flex items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-auto text-black ml-[25%]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-56"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
