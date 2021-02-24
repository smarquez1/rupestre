import styled from "styled-components"

const Header = () => {
  return (
    <Hero className="hero is-primary is-large has-background">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-uppercase">Make wine</h1>
          <h2 className="subtitle"> Descubrí el mundo rupestre. </h2>
        </div>
      </div>
    </Hero>
  )
}

const Hero = styled.div`
  &&& {
    background-image: url(/images/header_background.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0);
  }
`
export default Header
