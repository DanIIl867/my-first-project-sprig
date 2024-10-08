import { Header } from "./Header/Header"
import { Hero } from "./Hero/Hero"
import { Companies } from "./Companies/Companies"
import { Rectangle } from "./Rectangle/Rectangle"
import { ContentBlock } from "./ContentBlock/ContentBlock"
import { ContentBlockTwo } from "./ContentBlockTwo/ContentBlockTwo"
import { Solutions } from "./Solutions/Solutions"
import { Features } from "./Features/Features"
import { Integrations } from "./Integrations_/Integrations"
import { CaseStudy } from "./CaseStudy/CaseStudy"
import { FooterTop } from "./FooterTop/FooterTop"
import { FooterBottom } from "./FooterBottom/FooterBottom"


export const App = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <Companies/>
            <Rectangle/>
            <ContentBlock/>
            <ContentBlockTwo/>
            <Solutions/>
            <Features/>
            <Integrations/>
            <CaseStudy/>
            <FooterTop/>
            <FooterBottom/>
        </>
    )
}