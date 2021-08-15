import React, { useEffect, useState } from "react";
import "./content.css";
import useStyles from "./Style";
import { useHistory } from "react-router";
import { Dialog, Slide, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Index = ({ assignment }) => {
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const [state, setState] =useState();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    switch (assignment.state) {
      case 1:
        setState("Accept");
        break;
      case 2:
        setState("Wating for acceptance");
        break;
      case 3:
        setState("Decline");
        break;
      default:
        break; 
    }
  }, [assignment])

  const handleCloseUpdateForm = () => {
    setOpenUpdateDialog(false);
  };
  const handleOpenUpdateForm = () => {
    setOpenUpdateDialog(true);
  };
  const showAssignmentDetail = () => {
    handleOpenUpdateForm();
  };

  const handleEditIconClick = () => {
    history.push(`/editAssginment`);
  };
  return (
    <>
      <Dialog
        id="detailed_assignment"
        open={openUpdateDialog}
        TransitionComponent={Transition}
        keepMounted
        disableEscapeKeyDown
        disableBackdropClick
        onClose={handleCloseUpdateForm}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <div className="dialog-title">
          <p>Detailed Assignment Information</p>
          <button className="close-btn" onClick={handleCloseUpdateForm}>X</button>
        </div>
        <div className="dialog-content">
          <div className="dialog-content-title">
            <div>Asset Code</div>
            <div>Asset Name</div>
            <div>Specification</div>
            <div>Assigned to</div>
            <div>Assigned by</div>
            <div>Assigned Date</div>
            <div>State</div>
            <div>Note</div>
          </div>
          <div className="dialog-content-data">
            <div>{assignment.asset.assetCode}</div>
            <div>{assignment.asset.assetName}</div>
            <div>{assignment.asset.specification}</div>
            <div>{assignment.assignedTo.username}</div>
            <div>{assignment.assignedBy.username}</div>
            <div>{assignment.assignedDate.slice(0, 10)}</div>
            <div>{state}</div>
            <div>{assignment.note}</div>
          </div>
        </div>
      </Dialog>
      <tr>
        <td onClick={showAssignmentDetail}>{assignment.assignmentId}</td>
        <td onClick={showAssignmentDetail}>{assignment.asset.assetCode}</td>
        <td onClick={showAssignmentDetail}>{assignment.asset.assetName}</td>
        <td onClick={showAssignmentDetail}>{assignment.assignedTo.username}</td>
        <td onClick={showAssignmentDetail}>{assignment.assignedBy.username}</td>
        <td onClick={showAssignmentDetail}>{assignment.assignedDate.slice(0,10)}</td>
        <td onClick={showAssignmentDetail}>{state}</td>
       

        <td id="icon_zone">
          <div id="edit_icon">
            <EditIcon onClick={handleEditIconClick}/>
          </div>
          <div>
            <DeleteIcon style={{marginLeft: "15px"}}/>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Index;
