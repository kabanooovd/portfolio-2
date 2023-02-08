import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components"
import { ROUTES } from "./config";
import { About, Education, Main, Projects } from "./pages";

const ContentWrapper = styled.div`
  padding: 100px 40px 10px 40px;
`

export const AppRoutes = () => {

  const { BLANK, MENU, ABOUT, PROJECTS, EDUCATION } = ROUTES

  return (
    <ContentWrapper>
      <Routes>
        <Route path={MENU} element={<Main />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={EDUCATION} element={<Education />} />
        <Route path={BLANK} element={<Navigate to={MENU} replace />} />
      </Routes>
    </ContentWrapper>
  )
}