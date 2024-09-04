
import './App.css'
import Hero from './sections/Hero'
import WorkingExperience from './sections/WorkingExperience/WorkingExperience'
import { WorkingExperienceData } from './sections/WorkingExperience/WorkingExperienceData'
import SideHustles from './sections/SideHustles/SideHustles'
import { SideHustlesData } from './sections/SideHustles/SideHustlesData'
import References from './sections/References'
import DiceExample from './sections/DiceExample'

function App() {

  return (
    <>
      <Hero />
      <WorkingExperience WorkingExperienceData={WorkingExperienceData}  />
      <References />
      <SideHustles SideHustlesData={SideHustlesData} />
      <DiceExample />
    </>
  )
}

export default App
