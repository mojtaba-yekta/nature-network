import { AppBar, Button, CssBaseline, Toolbar, Typography } from "@mui/material";

function Board() {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Nature Network
          </Typography>
          <Button>About</Button>
          <Button>Export</Button>
          <Button>Import</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Board;
