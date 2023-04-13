/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const App = () => {
  return (
    <>
      <AppBar position="static" sx={{ height: 90 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, lineHeight: 4.5, fontSize: 24 }}
          >
            Task-Management
          </Typography>
        </Toolbar>
      </AppBar>
      <div css={bottom}>
        <div css={contents}>
          <div css={box}>
            <div css={title}>
              <div>ToDo</div>
              <div>課題数</div>
            </div>
          </div>
          <div css={box}>
            <div css={title}></div>
          </div>
          <div css={box}>
            <div css={title}></div>
          </div>
          <div css={box}>
            <div css={title}></div>
          </div>
        </div>
      </div>
    </>
  );
};

const bottom = css`
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdfdfd;
`;
const contents = css`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 70%;
`;
const box = css`
  height: 100%;
  width: 22%;
  border-radius: 10px;
  background-color: #f7f6f6;
`;
const title = css`
  height: 60px;
  line-height: 60px;
  border-bottom: 3px solid white;
  display: flex;
`;
