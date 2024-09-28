import React, { useState } from "react";

const notifications = [
  { id: 1, status: "new", content: "We are pleased to inform you that a new customer has registered! Please follow up promptly by contacting.", time: "Just Now", type: "all" },
  { id: 2, status: "offer", content: "Enjoy a 20% discount on selected products.", time: "30 minutes ago", type: "all" },
  { id: 3, status: "reminder", content: "We are pleased to inform you that a new customer has registered! Please follow up promptly by contacting.", time: "2 days ago", type: "all" },
  { id: 4, status: "reminder", content: "This is a reminder to achieve this month's sales target.", time: "2 days ago", type: "all" },
  { id: 5, status: "reminder", content: "We are pleased to inform you that a new customer has registered! Please follow up promptly by contacting.", time: "3 days ago", type: "all" },
  { id: 6, status: "reminder", content: "This is a reminder to achieve this month's sales target.", time: "2 days ago", type: "all" },
  { id: 7, status: "reminder", content: "We are pleased to inform you that a new customer has registered! Please follow up promptly by contacting.", time: "5 days ago", type: "all" },
  { id: 8, status: "info", content: "Product information request from a potential customer.", time: "5 days ago", type: "archive" },
  { id: 9, status: "info", content: "Product information request from a potential customer.", time: "07 Feb, 2024", type: "archive" },
  { id: 10, status: "info", content: "Product information request from a potential customer.", time: "07 Feb, 2024", type: "archive" },
  { id: 11, status: "info", content: "Product information request from a potential customer.", time: "09 Feb, 2024", type: "archive" },
  { id: 12, status: "info", content: "Product information request from a potential customer.", time: " Feb, 2024", type: "archive" },
  { id: 13, status: "meeting", content: "A meeting or presentation has been scheduled with a customer.", time: "01 Feb, 2024", type: "favorite" },
  { id: 14, status: "reminder", content: "Reminder to review the contract currently under discussion.", time: "28 Jan, 2024", type: "favorite" },
  { id: 15, status: "reminder", content: "Reminder to review the contract currently under discussion.", time: "28 Jan, 2024", type: "favorite" },
];

const NotificationList = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter(
    (notification) => notification.type === activeTab
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="material-icons-outlined">notifications</span>
          <span className="text-xl font-semibold">List of Notifications</span>
        </div>
        {/* Three-dot dropdown icon */}
        <button className="relative" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span className="material-icons">more_vert</span>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</button>
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help</button>
              <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </button>
      </div>

      <p className="text-gray-600 mt-2">188 Notifications</p>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          className={`px-4 py-2 rounded-full ${activeTab === "all" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setActiveTab("all")}
        >
          20 All
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === "archive" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setActiveTab("archive")}
        >
          10 Archive
        </button>
        <button
          className={`px-4 py-2 rounded-full ${activeTab === "favorite" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => setActiveTab("favorite")}
        >
          17 Favorite
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-4">
        <input
          type="text"
          placeholder="Search by Name Product"
          className=" w-[80%] py-2 px-4 bg-gray-100 border rounded-full focus:outline-none focus:ring focus:ring-gray-200"
        />
      </div>

      {/* List of Notifications */}
      <div className="mt-8">
        {filteredNotifications.map((notification) => (
          <div
            key={notification.id}
            className="flex justify-between items-center bg-white p-4 mb-2 rounded-lg shadow-sm hover:bg-gray-50"
          >
            <div className="flex items-center space-x-2">
              <span
                className={`material-icons ${notification.status === "new" ? "text-green-500" : "text-gray-500"}`}
              >
                {notification.status === "new" ? "fiber_manual_record" : "star_outline"}
              </span>
              <p className="text-gray-700 text-sm">{notification.content}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{notification.time}</span>
              <button className="text-red-500">
                <span className="material-icons">delete</span>
              </button>
            </div>
          </div>
        ))}

        {/* If no notifications are available */}
        {filteredNotifications.length === 0 && (
          <p className="text-gray-600">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationList;