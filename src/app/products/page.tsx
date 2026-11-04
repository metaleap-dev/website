import type { Metadata } from 'next';
import { ArcadeFeature, ContactCTA, GameCollection, Intro, MotifyFeature } from '@/components/Studio';
export const metadata:Metadata={title:'Our work — MetaLeap',description:'Explore Shapemo Arcade, home to Glowsea and BooDash, and MotifyUp, our family goal tracking app.'};
export default function Products(){return <><Intro label="OUR PRODUCT PORTFOLIO" title="Purpose-built digital experiences."><p>From character-driven games to family goal tracking, our products combine thoughtful design with a clear purpose.</p></Intro><div className="shell"><ArcadeFeature/></div><GameCollection/><div className="shell"><MotifyFeature/></div><ContactCTA/></>}
