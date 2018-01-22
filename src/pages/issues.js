import React from 'react'
import Hero from '../components/Hero'

const IssuesPage = function({data}){
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Hero headerImage={data.headerImage} alt="Elena chats with two women at the 2018 Women's March in Wilmington, NC."/>
      <div className="l-container">
        <h1>Issues</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} className="h-legibility" />
      </div>
    </div>
  )
}


export const pageQuery = graphql`
  query IssuesPage{
    markdownRemark(frontmatter: { path: { eq: "/issues" } }) {
      html
      frontmatter {
        path
      }
    }
    headerImage: imageSharp( id: { regex: "/womensmarch/"}) {
      sizes(maxWidth: 1074){
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default IssuesPage;