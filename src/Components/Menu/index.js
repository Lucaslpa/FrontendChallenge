import PropTypes from "prop-types";
import UserSVG from "../../assets/user.svg";

function Menu({ userImgURL, LogoURL }) {
  return (
    <div className="w-full border-b-1 flex items-center justify-between px-10 py-10 sm:px-20 md:px-36">
      <div>
        {LogoURL && (
          <img alt="Logo" className="w-full max-w-xs" src={LogoURL} />
        )}
        {!LogoURL && <h1 className="text-5xl font-bold">Logo</h1>}
      </div>

      <div className="bg-gray-200 cursor-pointer  rounded-full p-7">
        {userImgURL && (
          <img alt="User" className="w-full max-w-4" src={userImgURL} />
        )}
        {!userImgURL && (
          <img alt="User" className="w-full max-w-4" src={UserSVG} />
        )}
      </div>
    </div>
  );
}

Menu.propTypes = {
  userImgURL: PropTypes.string,
  LogoURL: PropTypes.string,
};

export default Menu;
