import styled from "styled-components";
import Title from "../componenets/Title";
import Toggle from "../componenets/Toggle";

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <HomeHeader>
          <Title />
          <Toggle />
        </HomeHeader>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 50%;
  height: 80vh;
  border-radius: 5rem;
  background-color: #f2f3f5;
`;

const HomeHeader = styled.div`
  display: flex;
`;
