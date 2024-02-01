import "chartkick/chart.js";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import React, { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrorsList } from "./redux/reducers/errorList";
import DevelopmentPage from "./pages/developmentPage/DevelopmentPage";
import { Button, Drawer } from "antd";
import { DownSquareOutlined } from "@ant-design/icons";
import style from "./pages/developmentPage/style.module.scss";
import AlertMessage from "./components/alertComponent/AlertMessage";
function App() {
  const [isDrawerVisible, setIsDraweVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getErrorsList);
  }, [dispatch]);
  const errorStatus = useSelector((state) => {
    return state.errorList.errorStatus;
  });
  const AutorizedAversys = lazy(() =>
    import("./pages/autorizedPage/AutorizedAversys")
  );
  const MainPage = lazy(() => import("./pages/mainPage/MainPage"));
  const RegisterPageAversys = lazy(() =>
    import("./pages/register/RegisterPageAversys")
  );
  const Page404 = lazy(() => import("./pages/page404/Page404"));
  const PersonalAreaAversys = lazy(() =>
    import("./pages/personalArea/PersonalAreaAversys")
  );
  const SupportPage = lazy(() =>
  import("./pages/supportPage/supportPage")
);

  const onClose = () => {
    setIsDraweVisible(false);
  };

  const showDrawer = () => {
    setIsDraweVisible(true);
  };
  return (
    <>
      {errorStatus && <AlertMessage />}
      <Button
        style={{
          position: "absolute",
          left: "10px",
          top: "10px",
          zIndex: "100",
        }}
        size="large"
        icon={<DownSquareOutlined />}
        onClick={showDrawer}
      ></Button>
      <Drawer
        placement="top"
        closable={false}
        onClose={onClose}
        open={isDrawerVisible}
        key="top"
      >
        <div onClick={onClose} className={style.drawerContainer}>
          <Link to="/register">
            <Button type="default">Register</Button>
          </Link>
          <Link to="/autorized">
            <Button type="dashed">Authorized</Button>
          </Link>
          <Link to="/">
            <Button type="ghost">MainPage</Button>
          </Link>
          <Link to="/persArea">
            <Button>Personal Area</Button>
          </Link>
          <Link to="/support">
            <Button>Support page</Button>
          </Link>
          <Link to="/dev">
            <Button type="primary">DEVELOPMENT</Button>
          </Link>
        </div>
      </Drawer>
      <Routes>
        <Route
          path="*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Page404 />
            </React.Suspense>
          }
        />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <MainPage />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<>...</>}>
              <RegisterPageAversys />
            </React.Suspense>
          }
        />
        <Route
          path="/autorized"
          element={
            <React.Suspense fallback={<>...</>}>
              <AutorizedAversys />
            </React.Suspense>
          }
        />
        <Route
          path="/persArea"
          element={
            <React.Suspense fallback={<>...</>}>
              <PersonalAreaAversys />
            </React.Suspense>
          }
        />
        <Route
          path="/dev"
          element={
            <React.Suspense fallback={<>...</>}>
              <DevelopmentPage />
            </React.Suspense>
          }
        />
                <Route
          path="/support"
          element={
            <React.Suspense fallback={<>...</>}>
              <SupportPage/>
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
