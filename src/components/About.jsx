import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import IMG from '../../public/img/about.webp'
import AnimatedTitle from './Ui/AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP( () => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center-center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to ZENTRY</h2>
        <AnimatedTitle title={"Disc<b>o</b>ver the world's<br /> l<b>a</b>rgest shared adventure"} containerClass={"mt-5 !text-black text-center"}/>
        <div className="about-subtext">
            <p>The Game of Games begins-your life, now an epic RPG</p>
            <p>Zentry Unites every player from countless games abd platforms </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id='clip'>
        <div className="mask-clip-path about-image">
            <img src={IMG} alt="background" className='absolute left-0 top-0 size-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default About
