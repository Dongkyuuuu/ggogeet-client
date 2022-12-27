import Button from "@/src/components/common/Buttons/Button";
import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/atoms";
import RemindNavigationBar from "@/src/components/features/letter-remind/Main/RemindNavigationBar";
import TodoContainer from "@/src/components/features/letter-remind/Main/TodoContainer";
import { RemindData } from "@/src/data/LetterRemind";
import { Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  height: 100vh;
`;

const MainLayout = styled.div`
  padding: 12px 16px 0 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 270px;
  padding: 0 0 28px 0;
  justify-content: space-between;
`;

const TodoContainerWrapper = styled.div`
  padding: 0 0 12px 0;
`;

const TopNavigationTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Display2}
`;

const LetterRemindPage = () => {
  return (
    <Layout>
      <TopNavigation
        title={<TopNavigationTitle>꼬깃 기억</TopNavigationTitle>}
        leftElem={<NavBack color="white" />}
      />

      <MainLayout>
        <RemindNavigationBar selectedItem="모든 메모" />
        {/* <ButtonsContainer>
          <Button name="모든 꼬깃기억" fontStyle="bold" isDark={true} />
          <Button name="미완료" fontStyle="bold" isDark={true} />
          <Button name="완료" fontStyle="bold" isDark={true} />
        </ButtonsContainer> */}

        {RemindData.map((item) => {
          return (
            <TodoContainerWrapper key={item.id}>
              <TodoContainer todo={item} />
            </TodoContainerWrapper>
          );
        })}
      </MainLayout>
    </Layout>
  );
};

export default LetterRemindPage;
