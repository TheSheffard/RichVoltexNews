
import AdSense from "../AdSense"
import { SearchBar } from "../SearchComp/SearchComp"
import { EditorsChoice, HomeHero, LastSection, ThirdSection, TopNews } from "./HomeHelp"

export const HomeComp = () => {
  return (
    <div className="px-2 h-fit  border-red-500 max-w-[1400px] mx-auto">

      <SearchBar />

      <AdSense adSlot="3891595190" />
      <HomeHero />

      <TopNews />

      <ThirdSection />

      <EditorsChoice />

      <LastSection />

    </div>
  )
}

