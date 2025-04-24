
import { EditorsChoice, HomeHero, LastSection, LongAdsBanner, ThirdSection, TopNews } from "./HomeHelp"

export const HomeComp = () => {
  return (
    <div className="px-2 h-fit  border-red-500 max-w-[1400px] mx-auto">
      <HomeHero />
      {/* <LongAdsBanner /> */}
      <TopNews />
      {/* <LongAdsBanner /> */}
      <ThirdSection />
      {/* <LongAdsBanner /> */}
      <EditorsChoice />
      <LastSection />

    </div>
  )
}

