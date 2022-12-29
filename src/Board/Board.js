import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

function Board() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Nature Network
          </Typography>
          <Button color="menu">About</Button>
          <Button color="menu">Export</Button>
          <Button color="menu">Import</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg"></Container>
    </>
  );
}

export default Board;
