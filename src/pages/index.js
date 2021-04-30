import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Image from '../components/Image/Image'
import Hash from  '../components/Hash/Hash'
import SocialProfiles from '../components/SocialProfiles/SocialProfiles'
import Resources from "../components/Resources/Resources";

const Main = styled.main`
  padding-left:var(--gutter-md);
  padding-right:var(--gutter-md);
`

// markup
const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <Main>
        <Hero className="fun" title="" body="">
        <h1><Image variant="grayscale" src="https://avatars.githubusercontent.com/u/448523?v=4" width="36px" /> Jason J Geiger</h1>
          <p><strong>Obligitory hashtags:</strong></p>
          <p>
            <Hash string="human centric design" /><Hash string="user advocacy" /> <Hash string="experience strategy" /> <Hash string="user research" /> <Hash string="design thinking" /> <Hash string="ideation" /> <Hash string="prototyping" /> <Hash string="leadership" /> <Hash string="collaboration" /> <Hash string="learning psychology" /> <Hash string="information architecture" /> <Hash string="marketing" /> <Hash string="sketch" /> <Hash string="invision" /> <Hash string="nodejs" /> <Hash string="react" /> <Hash string="sass" />
          </p>
          <p><i>Portfolio available by request.</i></p>
          <SocialProfiles/>
        </Hero>
        <h2>Recently read, watched, or listened</h2>
        <Resources hitsPerPage={12} colWidth="20%" />
      </Main>
    </Layout>
  )
}

export default IndexPage