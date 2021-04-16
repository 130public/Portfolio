import * as React from "react"
import styled from 'styled-components';
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Image from '../components/Image/Image'
import Grid from '../components/Grid/Grid'
import Card from '../components/Card/Card'

const Span = styled.span`
  display:inline-block;
  padding-right:var(--gutter-xs);
`;

const gridSource = [
  {
    id:0,
    itemKey:"item1",
    name:"card 1"
  },
  {
    id:1,
    itemKey:"item2",
    name:"card 2"
  }
]

// const Card = (props) => {
//   return (
//     <div {...props}>I am card {props.name}</div>
//   );
// }
const gridItems = gridSource.map((item) => { return <Card {...item}/> })

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Hero className="fun" title="Page title" body="">
          <p><strong>Obligitory hashtags:</strong></p>
          <p><Span>#human centric design</Span> <Span>#user advocacy</Span> <Span>#experience strategy</Span> <Span>#user research</Span> <Span>#design thinking</Span> <Span>#ideation</Span> <Span>#prototyping</Span> <Span>#leadership</Span> <Span>#collaboration</Span> <Span>#learning psychology</Span> <Span>#information architecture</Span> <Span>#marketing</Span> <Span>#sketch</Span> <Span>#invision</Span> <Span>#nodejs</Span> <Span>#react</Span> <Span>#sass</Span></p>
          <Image variant="grayscale" src="http://via.placeholder.com/100x100/0000FF/808080" />
        </Hero>
        <p>
        </p>
        <Grid items={gridItems} />
      </main>
    </Layout>
  )
}

export default IndexPage