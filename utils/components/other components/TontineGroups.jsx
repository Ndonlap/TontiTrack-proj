import React from "react";
import applog from "../../../assets/images/applog.png";
import notif from "../../../assets/images/notif.jpg";


const cards = [
  {
    title: "Enfant lonako",
    // amount: `CFA ${loaderData.balance} `,
    percentage: "0",
    changeText: "then last month",
    bgColor: "bg-amber-50",
    arrowColor: "text-amber-400",
  },
  {
    title: "AFTFC",
    // amount:  `CFA ${loaderData.tontineNumber} `,
    percentage: "1",
    changeText: "then last month",
    bgColor: "bg-green-50",
    arrowColor: "text-green-400",
  },
  {
    title: "Les debrouillard",
    // amount:  `CFA ${loaderData.contribution} `,
    percentage: "2",
    changeText: "then last month",
    bgColor: "bg-blue-50",
    arrowColor: "text-blue-400",
  },
  {
    title: "Awae women Asso",
    // amount:  `CFA ${loaderData.balance} `,
    percentage: "3",
    changeText: "then last month",
    bgColor: "bg-teal-50",
    arrowColor: "text-teal-400",
  },
  {
    title: "Foyer Bangoulap",
    // amount: `CFA ${loaderData.balance} `,
    percentage: "4",
    changeText: "then last month",
    bgColor: "bg-amber-50",
    arrowColor: "text-amber-400",
  },
];

const TontineGroups = () => {
  // const loaderData = useLoaderData()
  // console.log("loaderData",loaderData);
  return (
    <div className="flex flex-col">
         <nav className="w-[100%] h-[70px] flex justify-between flex-row items-center px-5  bg-white ">
      {/* logo */}
       <img
          src={applog}
          style={{ height: 48, width: 48 }}
          className="rounded-full"
          alt=""
        /> 
      {/* text */}
       <ul className="flex flex-row gap-[90px] text-[#6c6a6a] w-[1000px] ">
          <li>
            <a
              className="hover:underline  hover:decoration-green-500"
              href="/UserLanding"
            >
              Dashboard
            </a>
          </li>
        </ul> 
      {/* notif button */}
       <div className="  flex flex-row items-center justify-between  ">
          <button type="button">
            {" "}
            <a href="/NotificationList">
              <img
                title="Notifications"
                src={notif}
                style={{ height: 30, width: 30 }}
                className="rounded-full"
                alt=""
              />
            </a>
          </button>
        </div> 
        <button className="michelle text-[#f5f5f5] px-3 py-1 bg-blue-900 border-[#3b9205] border-2 rounded-full hover:pointer hover:bg-white hover:text-[#1a5cb9]">
                <a href="/Userdecision">Make a choice</a>
              </button>
      </nav>
      <div className="h-[20%] bg-gray-100 p-6 flex flex-row gap-6">   
    {cards.map((card, index) => (
      <div
        key={index}
        // Attach the onClick only if the card is "Tontine Groups"
      // Add navigation only to Tontine Groups card
        className={`sm:w-1/2 lg:w-1/4 p-4 rounded-lg shadow-md flex flex-col justify-between ${card.bgColor}`}

      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{card.title}</h2>
          <div
          // className={`flex items-center justify-center w-6 h-8 rounded-full bg-white ${card.arrowColor}`}
          ></div>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-bold">{card.amount}</h3>
          <p className="text-sm text-gray-500 mt-2">
            <span className={`font-semibold ${card.arrowColor}`}>
              {card.percentage}
            </span>{" "}
            {card.changeText}
          </p>
        </div>
      </div>
    ))}
  </div>
    </div>
  
  );
};

export default TontineGroups;

// export const getTontineByMemberId = async ({ params }) => {
//   let response = await fetch(`http://localhost:5000/api/tontine/getUserDetail`, {
//     method: 'get',
//     headers: {
//       'content-type': 'application/json',
//       'accept': 'applicaion/json',
//       'access-control-origin': '*',
//       'Authorization': `Bearer ${localStorage.getItem('tonti_token')}`
//     },
//   })
//   if (!response.ok) {
//     throw ("An error occur in get data")
//   }
//   return response.json()
// }