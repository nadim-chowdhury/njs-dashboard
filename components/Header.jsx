import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className="flex justify-between p-6 w-full">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div>
        <h3>Welcome Back, {user ? user.displayName : "User Name"}</h3>
        <p className="text-end">{new Date().toDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
