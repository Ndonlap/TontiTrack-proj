import React, { useState } from "react";
// import Modal from "react-modal";
import applog from "../../../assets/images/applog.png";
// import profile from "../../assets/profile.png";
import Dropdown from "../../../utils/components/other components/Dropdown";
import member from "../../../assets/images/member.jpg";
import moneyweek from "../../../assets/images/moneyweek.jpg";
import moneypool from "../../../assets/images/moneypool.jpg";
import moneyyear from "../../../assets/images/moneyyear.jpg";
import wallet from "../../../assets/images/wall.jpg";
import notif from "../../../assets/images/notif.jpg";
import Button from "../../../utils/components/Buttons/Button";
// import { Hoverbuts } from "../../components/Hoverbuts";
// import { Button} from "flowbite-react";
import woman from "../../../assets/images/woman.jpg";
import man from "../../../assets/images/man.jpeg";
import man2 from "../../../assets/images/man2.jpg";
import man3 from "../../../assets/images/man3.jpeg";
import Users from "../../../utils/components/other components/Users";
import Referential from "../../../utils/components/other components/Referential";
import ReportChart from "../../../utils/components/other components/ReportChart";
import MakeContribution from "../globalView/MakeContribution";
import NotificationList from "../globalView/NotificationList";
import ModalComponent from "../../../utils/components/other components/Modal";
import UserLanding from "../globalView/UserLanding";
import Payouts from "../globalView/Payouts";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import TontineReport from "./TontineReport";


// import NotificationList from "./NotificationList";

// import { Chart } from "primereact/chart";
// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

// import Sidebar from "../../components/sidebar";

// array for userlist
const arrayn = [
  {
    id: 1,
    img: man,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 2,
    img: woman,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 3,
    img: man2,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 4,
    img: man3,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 1,
    img: man,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 2,
    img: woman,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 3,
    img: man2,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 4,
    img: man3,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 11,
    img: man,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 12,
    img: woman,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 13,
    img: man2,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 14,
    img: man3,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 5,
    img: man,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 6,
    img: woman,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 7,
    img: man2,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
  {
    id: 8,
    img: man3,
    name: "N Michelle",
    date: "2024-08-24",
    status: "Active",
  },
];

const Secretarypage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  // modal
  let subtitle;
  const [dropIsOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [suggestionModal, setSuggestionModal] = useState(false);

  function openDrop() {
    setIsOpen(true);
  }

  function closeDrop() {
    setIsOpen(false);
  }

  const [formData, setFormData] = useState({
    firstName: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
  };



  return (
    <>
      <div className="w-full h-screen bg-white flex flex-col ">
        {/* First slide */}
        <nav className="w-[100%] h-[70px] flex justify-between flex-row items-center px-4 bg-white">
          {/* logo */}
          <img
            src={applog}
            style={{ height: 52, width: 52 }}
            className="rounded-full"
            alt=""
          />
          {/* text */}
          <ul className="flex flex-row gap-[70px] text-[#6c6a6a] w-[1000px]">
            <li>
            <a
                className={`${activeTab == "dashboard" ? "border-green-600 cursor-pointer border-b-2 p-4": ""}`}
                onClick={() => activeTab != 'dashboard' ? setActiveTab("dashboard") : console.log("clicked")}
              >
                Dashboard
              </a>
            </li>
            <li>
           <button>
           <a
                className={`${activeTab == "make-contributions" ? "border-green-600 cursor-pointer border-b-2 p-4": ""}`}
                onClick={() => activeTab != 'make-contributions' ? setActiveTab("make-contributions") : console.log("clicked")}
              >
                Contributions
              </a>
           </button>
            </li>
            <li>
            <button>
            <a
                className={`${activeTab == "payouts" ? "border-green-600 cursor-pointer border-b-2 p-4": ""}`}
                onClick={() => activeTab != 'payouts' ? setActiveTab("payouts") : console.log("clicked")}
              >
                Payouts
              </a>
            </button>
            </li>
            <li>
           <button>
           <a
                className={`${activeTab == "Reports" ? "border-green-600 cursor-pointer border-b-2 p-4": ""}`}
                onClick={() => activeTab != 'Reports' ? setActiveTab("Reports") : console.log("clicked")}
              >
                Reports
              </a>
           </button>
            </li>
          </ul>
          {/* Reference */}
          <Referential/>
          {/* userlanding */}
          <button type="button">
          <a 
            onClick={() => activeTab != 'userlanding' ? setActiveTab("userlanding") : console.log("clicked")}>
              <img
                title="UserLanding"
                src={wallet}
                style={{ height: 30, width: 30 }}
                className="rounded-full"
                alt=""
              />
            </a>
          </button>
          {/* notif button */}
          <button type="button">
            {" "}
            <a 
            onClick={() => activeTab != 'notification' ? setActiveTab("notification") : console.log("clicked")}>
              <img
                title="Notifications"
                src={notif}
                style={{ height: 30, width: 30 }}
                className="rounded-full"
                alt=""
              />
            </a>
          </button>
          {/* Suggestion button */}
          <button
            onClick={() => setSuggestionModal((isPrevious) => !isPrevious)}
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            type="button"
            title="Make a suggestion"
            className=" w-[35px] h-[25px] relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            <span className="sr-only">Notifications</span>
          </button>

          {
            // popover for the suggestion modal
            <ModalComponent
              setIsOpen={setSuggestionModal}
              modalIsOpen={suggestionModal}
              title="Suggestions"
          />}
            
          
          <Dropdown /> 
        </nav>
        { activeTab == "dashboard" && <>
        {/* Second slide */}
        <div className="w-[100%] h-[250px]">
          {/* paragraph and 4 divs */}
          <div className="text-4xl font-medium size-5 w-[50%] h-[100px] p-3">
            Welcome back Mrs. Elisabeth!
          </div>
          <div className="w-full p-3 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-[#daf4fe] rounded-md flex flex-col md:flex-row p-3 items-center  shadow-lg ">
              <img
                src={member}
                style={{ height: 43, width: 43 }}
                className="rounded-full "
                alt=""
              />
              <div className="flex flex-col gap-2 ml-5">
                <span>Members</span>
                <span className="text-xl font-bold">20</span>
              </div>
            </div>

            <div className="bg-[#ffebe6] rounded-md flex flex-col md:flex-row p-3 items-center  shadow-lg ">
              <img
                src={moneyweek}
                style={{ height: 43, width: 43 }}
                className="rounded-full "
                alt=""
              />
              <div className="flex flex-col gap-2 ml-5">
                <span>Amount/wk</span>
                <span className="text-xl font-bold">5,000Fcfa</span>
              </div>
            </div>

            <div className="bg-[#eaf3ff] rounded-md flex flex-col md:flex-row p-3 items-center  shadow-lg ">
              <img
                src={moneypool}
                style={{ height: 43, width: 43 }}
                className="rounded-full "
                alt=""
              />
              <div className="flex flex-col gap-2 ml-5">
                <span>Amount/pool</span>
                <span className="text-xl font-bold">100,000Fcfa</span>
              </div>
            </div>
            <div className="bg-[#fff3e9] rounded-md flex flex-col md:flex-row p-3 items-center  shadow-lg ">
              <img
                src={moneyyear}
                style={{ height: 43, width: 43 }}
                className="rounded-full "
                alt=""
              />
              <div className="flex flex-col gap-2 ml-5">
                <span>Objective/pool</span>
                <span className="text-xl font-bold">500,000Fcfa</span>
              </div>
            </div>
          </div>
        </div>
        {/* Third slide */}
        <div className="w-full p-3 flex flex-row gap-5">
           {/* list of users */}
          <Users users={arrayn} />
           {/* chart */}
           <ReportChart/>
        </div>

        </>}
        {activeTab == "make-contributions" && <MakeContribution />}
        {activeTab == "payouts" && <Payouts />}
        {activeTab == "notification" && <NotificationList />}
        {activeTab == "userlanding" && <UserLanding />}
        {activeTab == "reports" && <TontineReport />}
      </div>
    </>
  );
};

export default Secretarypage;
