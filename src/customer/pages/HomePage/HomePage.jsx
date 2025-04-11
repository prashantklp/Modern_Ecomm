import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

function HomePage() {
  return (
    <div>
      <MainCarosel/>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel SectionName={"Men's Kurta"}/>
        <HomeSectionCarosel SectionName={"Men's shoes"}/>
        <HomeSectionCarosel SectionName={"Men's shirt"}/>
        <HomeSectionCarosel SectionName={"Women's saree"}/>
        <HomeSectionCarosel SectionName={"Women's Kurtis"}/>
      </div>
    </div>
  )
}

export default HomePage
