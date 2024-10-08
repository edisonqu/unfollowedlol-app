'use client'
import Link from "next/link";
import Header, { scrollToFAQ, scrollToFeatures } from "@/components/home/Header";
import StatusDemo from "@/components/home/StatusDemo";
import UserDemo from "@/components/home/UserDemo";
import "./index.css"
import UserDemo2 from "@/components/home/UserDemo2";
import DropDown from "@/components/home/DropDown";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0
    });
  
    const leftSlides = document.querySelectorAll('.left-slide');
    leftSlides.forEach(el => observer.observe(el));
  
    const rightSlides = document.querySelectorAll('.right-slide');
    rightSlides.forEach(el => observer.observe(el));
  
    // Cleanup function to disconnect the observer
    return () => {
      observer.disconnect();
    };
  }, []);  

  return (
    <>
      <main className="overflow-hidden">
        <div className="bg-[#0B0B0F] w-screen flex flex-col" >
          <div className="h-screen flex flex-col mb-1/5 relative">
            <div className="w-[10%] h-[10%] left-[10%] top-[5%] absolute bg-gradient-to-b from-[#000000] to-[#FFD5CC] rounded-full blur-[100px]" />
            <div className="w-[15%] h-[20%] left-[10%] top-[5%] absolute bg-gradient-to-b from-[#891600] to-[#661100] blur-[100px]" />

            <div className="z-10 w-[12%] h-[20%] right-[8%] top-[40%] absolute bg-gradient-to-l from-[#00c3ff] to-[#FF29C3] rounded-full blur-[80px]" />
            <div className="z-10 w-[15%] h-[35%] right-[0%] top-[55%] translate-x-[50%] absolute bg-gradient-to-b from-[#184BFF] to-[#174AFF] blur-[110px]" />

            <div className="absolute w-[1200px] h-[500px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-0">
              <div className="w-full h-full relative">
                <p className="text-[76px] absolute top-[15%] left-[2%]">🍵</p>
                <p className="text-[76px] absolute bottom-[30%] right-[-2%] -skew-x-12">😂</p>
                <img src="/sphere.svg" className="absolute w-[76px] bottom-[20%] left-[2%]" alt="" />

              </div>
            </div>
            <div className="absolute w-[1750px] h-[750px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-0">
              <div className="w-full h-full relative">
                <p className="text-[76px] absolute top-[5%] right-[15%] skew-y-[23deg]">😱</p>
                <p className="text-[76px] absolute bottom-[-5%] left-[30%] skew-x-[20deg] rotate-[-12deg]">🤫</p>

              </div>
            </div>
            <div className="absolute w-[2400px] h-[1000px] left-[50%] top-[50%] -translate-x-[55%] -translate-y-[40%] rotate-[14deg] rounded-[100%] border border-zinc-700 opacity-50 z-0" />

            <img src="/sphere.png" className="opacity-80 absolute w-[12%] right-[0%] top-[50%] z-0" alt="" />

            <img src="/star-img.svg" className="absolute w-[3%] left-[15%] top-[30%]" alt="" />
            <img src="/star-2.svg" className="absolute w-[3%] right-[22%] top-[20%]" alt="" />
            <img src="/star-2.svg" className="absolute w-[2%] right-[17%] top-[90%]" alt="" />
            <img src="/star-3.svg" className="absolute w-[2%] right-[15%] top-[25%]" alt="" />



            <Header />
            <div className="flex-1 flex justify-center items-center z-10" >
              <div className="w-full flex flex-col gap-8 items-center ">
                <div className="flex flex-col gap-2 items-center">
                  <p className="max-w-3xl h-56 text-wrap text-5xl hero-text:text-8xl text-center font-bold leading-[115%] bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Discover who&apos;s unfollowing you</p>
                  <p className="max-w-lg text-wrap text-base sm:text-xl text-center bg-gradient-to-b from-[#FFFFFF] to-[#ffffff86] text-transparent bg-clip-text">Unlock the secrets of your social circle, without compromising your account&apos;s safety.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="relative rounded-xl overflow-hidden rainbow-button text-center text-base pt-4 pb-4 pl-7 pr-7">
                    <Link href="https://chromewebstore.google.com/detail/unfollowedlol-instagram-f/enpnfinfcofolfaknijihcopponbmnak">
                      Get The Extension
                    </Link>
                  </button>
                  <Link className="max-w-lg text-wrap sm:text-base text-center text-white bg-clip-text mt-2 text-base hover:text-[#ffffff86]" href="/setup">See how it works</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative">
            <div className="w-[30%] h-[15%] left-[12%] top-[40%] -translate-x-[80%] absolute bg-gradient-to-l from-[#FF29C3] to-[#00c3ff] rounded-full blur-[125px]" />
            <div className="w-[15%] h-[35%] left-[0%] top-[20%] -translate-x-[80%] absolute bg-gradient-to-b from-[#184BFF] to-[#174AFF] blur-[180px]" />

            <StatusDemo />
          </div>
          <div className="h-screen flex flex-col relative">
            <div className="w-1/12 h-1/12 right-[5%] top-[15%] -translate-y-[50%] absolute bg-gradient-to-b from-[#FFD5CC] to-[#FFD5CC] rounded-full blur-[100px]" />
            <div className="w-1/12 h-[30%] right-[10%] top-[30%] -translate-y-[50%] absolute bg-gradient-to-b from-[#891600] to-[#661100] blur-[100px]" />
            <UserDemo />
          </div>
          <div className="h-screen flex flex-col relative">
            <div className="w-[30%] h-[15%] left-1/12 top-[40%] -translate-x-[60%] absolute bg-gradient-to-l from-[#FF29C3] to-[#00c3ff] rounded-full blur-[115px]" />
            <div className="w-[16%] h-[35%] left-[0%] top-[50%] -translate-x-[60%] absolute bg-gradient-to-t from-[#184BFF] to-[#174AFF] blur-[150px]" />

            <UserDemo2 />
          </div>
          <div className="flex flex-col z-10">
            <div className="flex-1 z-10">
              <div className="grid-cols-2 grid justify-items-center wrap:flex wrap:flex-wrap-reverse justify-around items-center h-full">
                <div className="relative">
                  <img src="/Vector.png" alt="" />
                  <img src="/Vector.svg" alt="" className="absolute w-[60%] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" />
                </div>

                <div className="max-w-[500px] flex flex-col gap-10 p-[4%] slide-in right-slide">
                  <p className="text-white font-bold text-[2.5rem] text-center">Privacy first, always.</p>
                  <p className="text-white text-2xl text-center">We&apos;ll never ask you to login to your Instagram account or enter any personal information. Ever.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="faq" className="flex flex-col z-10">
              <div className="p-8 sm:p-20 flex flex-col gap-14 bg-cover bg-center"
                style={{ backgroundImage: "url('/FAQ-bg.png')" }}>
                <p className="text-wrap text-white font-bold text-4xl">Frequently Asked Questions</p>
                <div className="flex flex-col">
                  <DropDown question="How can I install Unfollowed.lol"
                    answer="You can download the extension from the Chrome Web Store by clicking the 'Get The Extension' button on the top right or bottom of the page."
                    style="border-t-2" />
                  <DropDown question="Do I need to enter my login information?"
                    answer="You don't need to enter your login information to use the app, as it accesses Instagram content through their API without requiring personal login credentials from users." />
                  <DropDown question="How does it work?"
                    answer="The app accesses public information from Instagram's API, allowing you to track your followers and following directly through the app." />
                  <DropDown question="Can others see that I've analyzed their profile?"
                    answer="No, the access to users' profiles is invisible to those being analyzed, ensuring your activity stays private." style="border-b-2" />
                </div>
              </div>
            </div>

            <div className="flex flex-col z-10">
              <div className="sm:h-20 p-3 sm:p-0 justify-items-center items-center flex-col flex sm:flex-row flex-shrink-0 justify-around gap-6 sm:gap-0">
                <div className="flex sm:flex-row flex-col gap-6 sm:gap-5 items-center">
                  {/* <p className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                      About
                  </p> */}
                  <Link href="/home">
                    <p className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                      Home
                    </p>
                  </Link>
                  <p onClick={scrollToFeatures} className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    Features
                  </p>
                  <p onClick={scrollToFAQ} className="text-white text-lg opacity-50 hover:opacity-100 transition-opacity duration-30 cursor-pointer">
                    FAQ
                  </p>

                  <button className="text-white text-xs py-2 px-5 rounded-xl border-white border">
                    <Link href="https://chromewebstore.google.com/detail/unfollowedlol-instagram-f/enpnfinfcofolfaknijihcopponbmnak">
                      Get The Extension
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="sticky bottom-5 w-full flex justify-end pr-5 z-[9999] hover:brightness-[0.8] transition-all">
        <a href="https://www.producthunt.com/posts/unfollowed-lol-no-login-insta-tracker?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-unfollowed&#0045;lol&#0045;no&#0045;login&#0045;insta&#0045;tracker" target="_blank">
          <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=455334&theme=light" alt="Unfollowed&#0046;lol&#0032;&#0045;&#0032;No&#0032;Login&#0032;Insta&#0032;Tracker - Free&#0032;&#0038;&#0032;No&#0032;Login&#0032;Instagram&#0032;Unfollower&#0032;Tracker | Product Hunt" 
         width="250" height="54"></img></a>
      </div>
    </>
  );
}
