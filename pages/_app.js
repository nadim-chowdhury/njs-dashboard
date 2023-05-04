import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function App({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}
