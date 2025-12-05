import { useSelector } from "react-redux";

const Usename = function () {
  const userName = useSelector((store) => store.user.username);

  if (!userName) return null;

  return <p className="text-sm font-semibold hidden md:block">{userName}</p>;
};

export default Usename;
