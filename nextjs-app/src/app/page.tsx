import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://yycpronto.com/",
  },
};

export default function Home() {
  return <HomeClient />;
}
