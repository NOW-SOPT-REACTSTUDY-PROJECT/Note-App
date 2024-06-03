import styled from "styled-components";
import Title from "../componenets/Title";

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <Title />
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/src/assets/image/background.jpg");
  background-size: cover;
  background-position: center;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
