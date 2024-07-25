'use client'
import Featured from "./_component/motionLaser/Featured";
import Occasion from "./_component/motionLaser/Occasion";

export default function Home() {

  return (
    <>
      <div className="">
        <Featured />
        <img src="/bg1.png" alt="dd" className="f-bg" />
      </div>
      {/* <Community /> */}
      {/* <SignUp /> */}
      <Occasion />
    </>
  );
}
