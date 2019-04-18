import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Page from '../components/page'
import Hero from '../components/hero'
import Main from '../components/main'
import styles from './resume.module.scss'

class Resume extends React.Component {
  render() {
    const{data,location} = this.props;

    return (
      <Page>
        <Helmet>
          <title>{data.contentfulPage.metaTitle} {data.site.siteMetadata.title}</title>
          <base target="_blank" href={location.href} />
          <meta name="description" content={data.contentfulPage.metaDescription} />
          <meta property="og:type" content="article" />
        </Helmet>
        <Hero title="Jason J. Geiger" body="As a designer, I focus on user advocacy & experience strategy; designing tools and services that empower people to learn more effectively. As a designer, I develop solutions that find the balance of business need, learning psychology, problem solving, technology, and craft." style="default">
          <p><i>Portfolio available by request.</i></p>
          <a href="/assets/jasonjgeiger-resume.pdf" target="_blank">Download PDF resume</a>
        </Hero>
        <Main padTop='large' style="white" offset={true} updatedAt={data.contentfulPage.updatedAt}>
          <article className="article">
            <h2>Work History</h2>
            <div className={styles.workItem}>
              <h3>Microsoft - Senior User Experience Designer</h3>
              <p className={styles.timeline}>October 2016 - Present</p>
              <p>UX designer with Worldwide Learning, creating innovative learning solutions that empower people to gain influential skills for the 21st century job force.</p>
            </div>
            <div className={styles.workItem}>
              <h3>Fisher - Senior Interactive Designer/Developer &amp; Team Lead</h3>
              <p className={styles.timeline}>April 2012 - October 2016</p>
              <p>At Fisher, I work as an Interactive Designer &amp; Digital Strategist helping to Develop interactive strategy, Define use cases and UX, Create information architecture, Develop wireframe UI and prototyping, and produce Digital interactive environments.</p>
            </div>
            <div className={styles.workItem}>
              <h3>Esser Design - Interactive Designer</h3>
              <p className={styles.timeline}>October 2010 - April 2012</p>
              <p>As an interactive designer I helped the design team develop strategy and execute digital projects for web, mobile and physical environments. My primary roles included: creating use cases, persona development, user experience, user interface, focus group concepting and wireframes/prototypes.</p>
              </div>
            <div className={styles.workItem}>
              <h3>AntalMedia - Designer/Developer</h3>
              <p className={styles.timeline}>September 2007 - October 2010</p>
              <p>As member of AntalMedia's interactive &amp; touch division, my design work focused on interface and web applications. I worked with the design team to produce aesthetic and functional internet based environments. Worked with several education based start-ups to create a digital presence and develop content and execution strategies.</p>
              </div>
            <div className={styles.workItem}>
              <h3>Bennett &amp; Hastings - Book Design Intern / Interactive Designer</h3>
              <p className={styles.timeline}>June 2008 - September 2008</p>
              <p>Received the intern position as a book designer. During the internship I helped concept and plan an e-commerce website with Bennett &amp; Hastings' Design Team.</p>
              </div>
            <div className={styles.workItem}>
              <h3>AntalMedia - Development Intern</h3>
              <p className={styles.timeline}>April 2007 - September 2007</p>
              <p>As an intern at AntalMedia I worked closely with the both the design and development teams to execute web and app based products. Through this experience I expanded my knowledge of practical front-end development and began learning object-oriented PHP and basic mySQl database design.</p>
            </div>
            <h2>Education</h2>
            <div className={styles.workItem}>
              <h3>Microsoft Certified: Azure Fundamentals</h3>
              <p className={styles.timeline}>2019</p>
              <p>Prove that you understand cloud concepts, core Azure Services, Azure pricing and support, and the fundamentals of cloud security, privacy, compliance, and trust.</p>
            </div>
            <div className={styles.workItem}>
              <h3>Arizona State University - Bachelor of Science in Design</h3>
              <p className={styles.timeline}>2003-2009</p>
              <p>I attended the College of Design at Arizona State University. I graduated with a Bachelor of Science in Design, Visual Communication – emphasis on Human Computer Interaction &amp; User Experience. Additional studies in Molecular Bioscience and Biotechnology.</p>
            </div>
          </article>
        </Main>
        </Page>
    )
  }
}

export default Resume

export const cvPageQuery = graphql`
  query cvPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "resume" }) {
      title,
      slug,
      metaTitle,
      metaDescription,
      content {
        hashtags
      },
      body {
        body
      },
      updatedAt(formatString: "Y-MM-DD")
    }
  }
`