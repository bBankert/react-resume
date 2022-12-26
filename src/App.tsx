import React from "react";
import "./App.css";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './pages/error';
import MainContent from "./containers/mainContent/mainContent";
import Dashboard from "./pages/dashboard";
import ProfessionalExprienceDetail from "./pages/professionalExperienceDetail";

const App = () => {
  //system preference color scheme
  const stateTheme = useSelector((state: any) => state.settings.theme);
  const systemDefault = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          //default to system default, otherwise toggle based on state
          mode: stateTheme ? stateTheme : systemDefault,
        },
      }),
    [systemDefault, stateTheme]
  );

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainContent />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/experience/:professionalExperienceId',
          element: <ProfessionalExprienceDetail />
        }
      ]
    }
  ],
  {
    basename: '/react-resume'
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
