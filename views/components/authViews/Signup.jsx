import React, { useState } from "react";
import porte from "../../../assets/images/porte.png";
import applog from "../../../assets/images/applog.png";
import Button from "../../../utils/components/Buttons/Button";


const Signup = () => {
  const backgroundImage = {
    backgroundImage: `url(${porte})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroupRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  };

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPass: "",
    dob: "",
  })
  const [msg, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => {
      let newData = {
        ...prevData,
        [name]: value
      }
      return newData
    })
  }

  const handleSubmit = async () => {
    await fetch(`http://localhost:5000/api/user/register`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'accept': 'applicaion/json',
        'access-control-origin': '*'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        confirmPass: formData.confirmPass,
        dob: formData.dob
      }),
    })
      .then(res => res.json())
      .then(async (data) => {
        console.log("data", data)
        if (data.message) {
          setMessage(data.message)
          setStatus("OK")
          setTimeout(() => {
            window.location.href = "/login" // navigate to admin dashboard
          }, 2000)
        } else {
          setMessage(data.error)
          setStatus("error")
        }
      })
      .catch(e => {
        console.log(e)
        setMessage("Verify your internet connection")
        setStatus("error")
      })
  }


  return (
    <div className="flex justify-center items-center  h-[100vh] m-0 bg-cover ">
      <div className="flex flex-row  border-none w-[80%] h-[75%] rounded-xl shadow-2xl">
        <div className="flex justify-center items-center bg-[#f0f6e9e3] rounded-l-lg  p-5 w-[85%] ">
          {/* Slide for the form */}
          <form
            className="rounded-lg h-[100%] w-[90%] ml-90 flex flex-col justify-between p-3"
          >
            <div className="flex items-center justify-between space-x-3">
              <button>
                <img
                  src={applog}
                  alt=""
                  className="w-[80px] h-[80px] rounded-3xl ml-0 "
                />
              </button>
              <div className={`${status === "OK" ? 'text-green-600' : 'text-red-500'} text-[13px]`}>
                <p>{msg}</p>
              </div>
            </div>
            <h1 className="weight-900">Sign Up</h1>
            <span>Let's start with some facts about you.</span>
            <div className="relative z-0 w-[80%] mt-2">
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="relative z-0 w-[80%] mt-2">
              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>
            <div className="relative z-0 w-[80%] mt-2">
              <div className="w-full">
                <input
                  type="password"
                  name="confirmPass"
                  id="floating_password"
                  onChange={handleInputChange}
                  value={formData.confirmPass}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm Password
                </label>
              </div>
            </div>
            <div className="relative z-0 w-[80%] mt-5">
              <div className="w-full">
                <input
                  type="Date"
                  name="dob"
                  onChange={handleInputChange}
                  value={formData.dob}
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Date of birth
                </label>
              </div>
            </div>
            {/* </div> */}

            <Button text={'Sign up'} size={"w-[80%] mt-9"} type="button" onClick={handleSubmit} />
            <p className="text-s w-[300px] mt-2" >Already have and account? <a href="/login" className="ml-5 text-[#04811fc1] underline" >Login</a></p>
          </form>
        </div>
        {/* Slide for the image */}
        <div style={backgroundImage} className="rounded-r-lg">

        </div>
      </div>
    </div>
  );
};

export default Signup;
