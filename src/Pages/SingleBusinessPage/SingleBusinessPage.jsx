import React from "react";
import Topbar from "../../components/Topbar";
import { SingleBusinessEnvironment } from "./SingleBusinessEnvironment";

export default function SingleBusinessPage() {
  return (
    <div className="flex flex-col w-full h-fit">
      <Topbar />
      <SingleBusinessEnvironment />
    </div>
  );
}
