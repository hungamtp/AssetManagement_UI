import React, { useState } from "react";
import "./user.css";
import useStyles from "./styles";
import { useHistory } from "react-router";
import { Dialog, Slide, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { get } from "../../../httpHelper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Index = ({ user }) => {
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openDeleteNotice, setOpenDeleteNotice] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const handleCloseUpdateForm = () => {
    setOpenUpdateDialog(false);
  };
  const handleOpenUpdateForm = () => {
    setOpenUpdateDialog(true);
  };
  const handleCloseDeleteNotice = () => {
    setOpenDeleteNotice(false);
  };
  const handleOpenDeleteNotice = () => {
    setOpenDeleteNotice(true);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  const handleOpenDeleteForm = () => {
    setOpenDeleteDialog(true);
  };
  const showUserDetail = () => {
    handleOpenUpdateForm();
  };

  const handleEditIconClick = () => {
    history.push(`/edituser/${user.staffCode}`);
  };

  const handleDeleteUser = async () => {
    const repsone = await get(`user/checkHaveAssignment/${user.staffCode}`);
    if (repsone.data.data !== true) {
      handleOpenDeleteForm();
    } else {
      handleOpenDeleteNotice();
    }
  };
  return (
    <>
      <Dialog
        id="detailed_user"
        open={openUpdateDialog}
        TransitionComponent={Transition}
        keepMounted
        disableEscapeKeyDown
        disableBackdropClick
        onClose={handleCloseUpdateForm}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div id="dialog-title" className={classes.dialogTitle}>
          Detailed User Information
        </div>
        <div className={classes.dialogContent}>
          <div className={classes.title}>
            <div>Staff Code</div>
            <div>Full Name</div>
            <div>Username</div>
            <div>Date Of Birth</div>
            <div>Gender</div>
            <div>Joined Date</div>
            <div>Type</div>
            <div>Location</div>
          </div>
          <div>
            <div>{user.staffCode}</div>
            <div>{user.fullName}</div>
            <div>{user.username}</div>
            <div>{user.dateOfBirth}</div>
            <div>{user.gender}</div>
            <div>{user.joinedDate}</div>
            <div>{user.type.replace("ROLE_", "")}</div>
            <div>{user.location}</div>
          </div>
        </div>
        <Button onClick={handleCloseUpdateForm} color="primary">
          Cancel
        </Button>
      </Dialog>
      <tr>
        <td onClick={showUserDetail}>{user.staffCode}</td>
        <td onClick={showUserDetail}>{user.fullName}</td>
        <td onClick={showUserDetail}>{user.username}</td>
        <td onClick={showUserDetail}>{user.joinedDate}</td>
        <td onClick={showUserDetail}>{user.type.replace("ROLE_", "")}</td>
        <td id="icon_zone">
          <div id="edit_icon">
            <EditIcon onClick={handleEditIconClick} />
          </div>
          <div>
            <DeleteIcon onClick={handleDeleteUser} />
            <Dialog
              open={openDeleteDialog}
              TransitionComponent={Transition}
              keepMounted
              disableEscapeKeyDown
              disableBackdropClick
              onClose={handleCloseDeleteDialog}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <div id="Form_jo">
                <div id="header_jp">Are you sure?</div>
                <div id="background_jq">
                  <div id="First_Name_jr">
                    Do you want to disable this user?
                  </div>
                  <div id="button_zone">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      id="delete_btn"
                    >
                      Delete
                    </Button>
                    <Button
                      size="small"
                      id="cancel_btn"
                      onClick={handleCloseDeleteDialog}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </Dialog>
            <Dialog
              open={openDeleteNotice}
              TransitionComponent={Transition}
              keepMounted
              disableEscapeKeyDown
              disableBackdropClick
              onClose={handleCloseDeleteNotice}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <div id="form_notice">
                <div id="header_notice">
                  <h4>Can not disable user</h4>
                  <button onClick={handleCloseDeleteNotice} id="cancel_notice">
                    X
                  </button>
                </div>
                <div id="content">
                  <div>There are valid assignments belongs to this user.</div>
                  <div>Plese close all assignments before disabling user.</div>
                </div>
              </div>
            </Dialog>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Index;
