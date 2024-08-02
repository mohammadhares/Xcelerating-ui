
// // InvestorSection.tsx
// import Image from "next/image";

// const investors = [
//   { name: "Investor One", image: "/images/team/investor1.jpg" },
//   { name: "Investor Two", image: "/images/team/investor2.jpg" },
//   { name: "Investor Three", image: "/images/team/investor3.jpg" },
//   { name: "Investor Four", image: "/images/team/investor2.jpg" },
// ];

// const InvestorSection = () => {
//   return (
//     <section className="bg-gray-100 py-[120px] dark:bg-gray-900">
//       <div className="container mx-auto">
//         <h2 className="mb-8 text-center text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
//           Our Investors
//         </h2>
//         <p className="mb-10 text-center text-lg font-medium leading-relaxed text-body-color sm:text-xl sm:leading-relaxed lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed">
//           We are proud to be backed by some of the most prominent investors in
//           the industry.
//         </p>
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {investors.map((investor, index) => (
//             <div key={index} className="text-center">
//               <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
//                 <Image
//                   src={investor.image}
//                   alt={investor.name}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold text-black dark:text-white">
//                 {investor.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InvestorSection;


// InvestorSection.tsx

const investors = [
  { name: "Investor One", image: "./images/team/investor1.jpg" },
  { name: "Investor Two", image: "./images/team/investor2.jpg" },
  { name: "Investor Three", image: "./images/team/investor3.jpg" },
  { name: "Investor Four", image: "./images/team/investor2.jpg" },
];

const InvestorSection = () => {
  return (
    <section className="py-[120px] bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight text-center">
          Our Investors
        </h2>
        <p className="mb-10 text-lg font-medium leading-relaxed text-body-color sm:text-xl sm:leading-relaxed lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-relaxed text-center">
          We are proud to be backed by some of the most prominent investors in the industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {investors.map((investor, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
                <img
                  src={investor.image}
                  alt={investor.name}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white">{investor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
