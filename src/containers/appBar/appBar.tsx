import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { setTheme } from "../../slices/settingsSlice";
import { THEME } from "../../shared/models/theme";

interface IAppBarBaseProps extends MuiAppBarProps {
  open?: boolean;
  width?: Number;
}

interface IAppBarProps extends IAppBarBaseProps {
  handleToggleDrawer(): any;
}

const AppBarBase = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<IAppBarBaseProps>(({ theme, open, width }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${width}px)`,
    marginLeft: `${width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = ({ open, handleToggleDrawer }: IAppBarProps) => {
  const theme = useTheme();
  const currentSiteTheme = useSelector((state: any) => state.settings.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(
      setTheme(currentSiteTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
    );
  };

  return (
    <AppBarBase position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleDrawer}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          sx={{ ml: 1, marginLeft: "auto" }}
          onClick={handleChangeTheme}
          color="inherit"
          aria-label={`Change theme to ${
            theme.palette.mode === "dark" ? "light" : "dark"
          } mode`}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
    </AppBarBase>
  );
};

export default AppBar;
