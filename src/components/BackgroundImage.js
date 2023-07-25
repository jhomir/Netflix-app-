import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <div>
      <BackgroundContainer>
        <img src='https://winbuzzer.com/wp-content/uploads/2019/01/netflix-reuse-official-696x392.jpg.webp'/>
      </BackgroundContainer>
    </div>
  )
}

const BackgroundContainer = styled.div`
      height: 100vh;
      width: 100vw;
      img{
        height: 100vh;
        width: 100vw;
      }
`

export default BackgroundImage
