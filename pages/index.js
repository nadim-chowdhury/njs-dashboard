import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import PieChart from "@/components/PieChart";
import TopCards from "@/components/TopCards";
import Head from "next/head";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LineChart from "@/components/LineChart";
import ScatterChart from "@/components/ScatterChart";
import { SteppedArea } from "@/components/SteppedArea";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 pb-4">
        <Header />
        <TopCards />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <BarChart />
          <PieChart />
          <SteppedArea />
          <ScatterChart />
          <LineChart />
        </div>
      </main>
    </>
  );
}
