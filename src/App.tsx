/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import DoneIcon from "@mui/icons-material/Done";
import PendingIcon from "@mui/icons-material/Pending";

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
              <div css={icon}>
                <Badge badgeContent={4} color="primary">
                  <TaskIcon />
                </Badge>
              </div>
            </div>
          </div>
          <div css={box}>
            <div css={title}>
              <div>進行中</div>
              <div css={icon}>
                <Badge badgeContent={4} color="primary">
                  <RotateRightIcon />
                </Badge>
              </div>
            </div>
            <div></div>
          </div>
          <div css={box}>
            <div css={title}>
              <div>Done</div>
              <div css={icon}>
                <Badge badgeContent={4} color="primary">
                  <DoneIcon />
                </Badge>
              </div>
            </div>
          </div>
          <div css={box}>
            <div css={title}>
              <div>保留</div>
              <div css={icon}>
                <Badge badgeContent={4} color="primary">
                  <PendingIcon />
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const bottom = css`
  height: calc(100vh - 90px);
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
  height: 80px;
  line-height: 80px;
  border-bottom: 3px solid white;
  display: flex;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const icon = css`
  padding-left: 5px;
`;
