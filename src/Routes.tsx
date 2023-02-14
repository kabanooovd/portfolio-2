import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components"
import { ROUTES } from "./config";
import { About, Contacts, Education, Main, Projects } from "./pages";

const ContentWrapper = styled.div`
  /* padding: 100px 40px 10px 40px; */
  overflow-y: auto;

`


export const AppRoutes = () => {

  const { BLANK, MENU, ABOUT, PROJECTS, EDUCATION, CONTACTS } = ROUTES

  return (
    <ContentWrapper>
      <Routes>
        <Route path={"/"} element={<h1>777</h1>} />
        <Route path={MENU} element={<Main />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={EDUCATION} element={<Education />} />
        <Route path={CONTACTS} element={<Contacts />} />
        <Route path={BLANK} element={<Navigate to={MENU} replace />} />
      </Routes>
    </ContentWrapper>
  )
}