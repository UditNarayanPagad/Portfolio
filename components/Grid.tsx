import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento_Grid'
import { gridItems } from '../Data'
import { TextRevealCard } from './ui/Text-reveal-card'

const Grid = () => {
  return (
    <section className=''>
         <BentoGrid className="w-full py-20 lg:min-h-[120vh] flex flex-wrap min-h-[280vh] relative">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      <div className='w-full flex items-center justify-center lg:mb-9'><TextRevealCard text={"Want to work together?"} revealText={"uditnarayanpagad@gmail.com"}/></div>
    </section>
  )
}

export default Grid