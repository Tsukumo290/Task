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
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DndContext } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const ModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 150,
  bgcolor: "background.paper",
  // border: "1px solid #000",
  boxShadow: 20,
  p: 3,
  borderRadius: "10px",
};

export const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [taskText, setTaskText] = useState("");

  const addTaskModalOpen = () => setAddTaskModal(true);
  const addTaskModalClose = () => setAddTaskModal(false);

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setAddTaskModal(false);
    }
  };

  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }

  return (
    <>
      <Modal
        open={addTaskModal}
        onClose={addTaskModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={ModalStyle}>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, height: "100%" }}
          >
            <textarea
              onChange={(e) => setTaskText(() => e.target.value)}
              placeholder="タスク"
              css={textArea}
            ></textarea>
            <Button onClick={addTask}>追加</Button>
          </Typography>
        </Box>
      </Modal>
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
                <Badge badgeContent={tasks.length} color="primary">
                  <TaskIcon />
                </Badge>
              </div>
            </div>
            {tasks.map((task, i) => (
              <div key={i} css={taskArea}>
                <div css={taskContent}>{task}</div>
              </div>
            ))}
            <div css={add} onClick={addTaskModalOpen}>
              <Button variant="text">+ タスクを追加</Button>
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
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <Droppable>{isDropped ? draggableMarkup : "Drop here"}</Droppable>
      </DndContext>
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
  background-color: #eeeded;
`;
const title = css`
  height: 80px;
  line-height: 80px;
  border-bottom: 3px solid #fdfdfd;
  display: flex;
  box-sizing: border-box;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const icon = css`
  padding-left: 5px;
`;
const add = css`
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 10px;
`;
const textArea = css`
  border: none;
  resize: none;
  outline: none;
  width: 100%;
  height: 55%;
  font-size: 16px;
  box-sizing: border-box;
  padding-left: 15px;
  line-height: 20px;
`;
const taskArea = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const taskContent = css`
  width: 95%;
  box-shadow: 50px;
  border: 1px solid #e6e6e6;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 15px;
  margin-top: 3px;
`;
