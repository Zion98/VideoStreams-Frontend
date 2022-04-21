import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../assets/profile.svg";
const Sidebar = () => {
  function logout() {
    localStorage.removeItem("tyUser");
    window.location.href = "/";
  }
  return (
    <div className="fixed bg-[#161d2f] h-3/4 w-16 rounded-2xl flex flex-col items-center">
      <NavLink to="/" className="pt-6 block">
        <svg
          width="25"
          height="27"
          viewBox="0 0 33 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.4628 0.408386L29.6628 6.80839H24.8628L21.6628 0.408386H18.4628L21.6628 6.80839H16.8628L13.6628 0.408386H10.4628L13.6628 6.80839H8.86279L5.66279 0.408386H4.06279C2.29479 0.408386 0.878793 1.84039 0.878793 3.60839L0.862793 22.8084C0.862793 24.5764 2.29479 26.0084 4.06279 26.0084H29.6628C31.4308 26.0084 32.8628 24.5764 32.8628 22.8084V0.408386H26.4628Z"
            fill="#FC4747"
          />
        </svg>
      </NavLink>

      <NavLink to="/" className="block mt-12">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
            fill="#5A698F"
            className="fill-[#fff]"
          />
        </svg>
      </NavLink>

      <NavLink to="/" className="block pt-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.9556 0H3.04444C1.36304 0 0 1.36304 0 3.04444V16.9556C0 18.637 1.36304 20 3.04444 20H16.9556C17.763 20 18.5374 19.6792 19.1083 19.1083C19.6792 18.5374 20 17.763 20 16.9556V3.04444C20 2.23701 19.6792 1.46264 19.1083 0.891697C18.5374 0.320753 17.763 0 16.9556 0ZM4 9H2V7H4V9ZM4 11H2V13H4V11ZM18 9H16V7H18V9ZM18 11H16V13H18V11ZM18 2.74V4H16V2H17.26C17.4563 2 17.6445 2.07796 17.7833 2.21674C17.922 2.35552 18 2.54374 18 2.74ZM4 2H2.74C2.54374 2 2.35552 2.07796 2.21674 2.21674C2.07796 2.35552 2 2.54374 2 2.74V4H4V2ZM2 17.26V16H4V18H2.74C2.54374 18 2.35552 17.922 2.21674 17.7833C2.07796 17.6445 2 17.4563 2 17.26ZM17.26 18C17.6687 18 18 17.6687 18 17.26V16H16V18H17.26Z"
            fill="#5A698F"
            className="hover:fill-[#fff] active:fill-[#fff]"
          />
        </svg>
      </NavLink>

      <NavLink to="/" className="pt-6">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
            fill="#5A698F"
            className="hover:fill-[#fff] active:fill-[#fff]"
          />
        </svg>
      </NavLink>

      <NavLink to="/" className="block pt-6">
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z"
            fill="#5A698F"
            className="hover:fill-[#fff] active:fill-[#fff]"
          />
        </svg>
      </NavLink>

      <div className="absolute bottom-6">
        <img
          src={Profile}
          alt="profile"
          className="w-full h-full rounded-full border-white"
        />

        <button onClick={logout} className="block p-4">
          <svg
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.621 1.03773L6.93142 0.457949C3.71084 -0.0481423 2.10055 -0.301188 1.05027 0.596932C0 1.49505 0 3.12511 0 6.38521V9.36914H5.91938L3.21913 5.99384L4.78087 4.74445L8.78087 9.74445L9.28062 10.3691L8.78087 10.9938L4.78087 15.9938L3.21913 14.7444L5.91938 11.3691H0V14.3522C0 17.6123 0 19.2424 1.05027 20.1405C2.10055 21.0386 3.71084 20.7856 6.93143 20.2795L10.621 19.6997C12.2337 19.4463 13.04 19.3196 13.52 18.7583C14 18.197 14 17.3807 14 15.7482V4.98924C14 3.35672 14 2.54046 13.52 1.97917C13.04 1.41788 12.2337 1.29116 10.621 1.03773Z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
