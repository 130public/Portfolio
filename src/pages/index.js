import * as React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout/Layout"
import Main from "../components/Main/Main"
import Hero from "../components/Hero/Hero"
import Image from '../components/Image/Image'
import Hash from  '../components/Hash/Hash'
import SocialProfiles from '../components/SocialProfiles/SocialProfiles'
import Resources from "../components/Resources/Resources";

// markup
const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <Hero className="fun" title="" body="">
        <h1>Jason J Geiger</h1>
        <p>A Principal Designer at Microsoft creating innovative learning solutions that empower people to gain influencial skills for the 21st century job force.</p>
        <p><i>Portfolio available by request.</i></p>
        <SocialProfiles/>
      </Hero>
      <Main>
        <h2><strong>Obligitory hashtags:</strong></h2>
        <p>
        <Hash string="Responsible AI" /> <Hash string="human centric design" /> <Hash string="user advocacy" /> <Hash string="experience strategy" /> <Hash string="user research" /> <Hash string="design thinking" /> <Hash string="ideation" /> <Hash string="prototyping" /> <Hash string="leadership" /> <Hash string="collaboration" /> <Hash string="learning psychology" /> <Hash string="information architecture" /> <Hash string="marketing" /> <Hash string="sketch" /> <Hash string="invision" /> <Hash string="nodejs" /> <Hash string="react" /> <Hash string="sass" />
        </p>

        <h2>Recently read, watched, or listened</h2>
        <Resources hitsPerPage={6} colWidth="31%" />
      </Main>
    </Layout>
  )
}

export default IndexPage