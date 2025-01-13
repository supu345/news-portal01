import React, { useState } from "react";
import { base_url } from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import storeContext from "../../context/storeContext";
const Login = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    //console.log(state);
    try {
      const { data } = await axios.post(`${base_url}/api/login`, state);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-w-screen min-h-screen bg-slate-200 flex justify-center items-center">
      <div className="w-[340px] text-slate-600 shadow-md">
        <div className="bg-white h-full px-7 py-8 rounded-md">
          <div className="w-full justify-center items-center flex">
            <img
              className="w-[200px]"
              src="https://images.pexels.com/photos/28907971/pexels-photo-28907971/free-photo-of-refreshing-iced-drinks-in-cafe-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="logo"
            />
          </div>
          <form onSubmit={submit} className="mt-8">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-md font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={state.email}
                required
                onChange={inputHandle}
                type="email"
                placeholder="email"
                name="email"
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label
                  className="text-md font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={inputHandle}
                  required
                  value={state.password}
                  type="password"
                  placeholder="password"
                  name="password"
                  className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                  id="password"
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                // disabled={loader}
                className="px-3 py-[6px] w-full bg-purple-500 rounded-sm text-white hover:bg-purple-600"
              >
                Login
                {/* {loader ? "loading..." : "Login"} */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
