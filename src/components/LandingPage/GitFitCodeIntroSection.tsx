import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { ShinyBgButton } from "../ui/ShinyBgButton";
import { bookButton } from "../Header/MainNav";
import { useNavigate } from "react-router";
import { useNavigationContext } from "../../contexts/navigation.context";

export default function GitFitCodeIntroSection() {
  const { isTablet } = useNavigationContext();

  const navigate = useNavigate();
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full flex  items-center justify-center relative max-w-7xl  mb-40  px-[2em]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6em] items-start ">
          <div className="md:col-span-2 flex flex-col items-start justify-center gap-12 ">
            <h2 className="text-[32px] z-20 md:text-4xl lg:text-7xl font-bold text-neutral-800 dark:text-white font-sans tracking-tight">
              Designed for Growth.{" "}
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-0 md:py-4 from-[#00C9CD] via-[#80E3E5] to-[#008A8C] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Engineered to Scale.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#00C9CD] via-[#52cacc] to-[#38cbce] py-0 md:py-4">
                  <span className="">Engineered to Scale.</span>
                </div>
              </div>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 font-sans tracking-tight max-w-2xl">
              We build enterprise-grade software solutions that adapt, evolve,
              and scale seamlessly—powering businesses, ideas, and innovation at
              any stage.
            </p>
            <ShinyBgButton
              className={`py-6 px-8 ${!isTablet && "w-full"}`}
              content="Book.Now"
              navItem={bookButton}
              handleClick={() => navigate(bookButton.route)}
            />
          </div>

          {isTablet && <div className="relative h-[310px] md:h-[335px] w-full">
            <div className="relative">
              <img
                className="absolute w-[222px] h-[299px] top-0 right-16"
                alt="Element"
                src="https://c.animaapp.com/2fHzREgW/img/7e1bbb97-69a6-4a54-8a5a-7c3749c09731-jpg--1-.png"
              />
              <img
                className="absolute w-8 h-8 top-10 right-16"
                alt="Thumbs up"
                src="https://c.animaapp.com/2fHzREgW/img/thumbs-up.png"
              />
              <img
                className="absolute w-[214px] h-[218px] top-[135px] right-0"
                alt="Linkedin profile"
                src="https://c.animaapp.com/2fHzREgW/img/linkedin-profile-picture-11-08-2022-1.png"
              />

              <div
                className={`z-10 w-8 h-8 bg-[url(https://c.animaapp.com/2fHzREgW/img/notification-2.svg)] bg-[100%_100%] absolute right-1 top-[164px]`}
              />
            </div>
          </div>}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
