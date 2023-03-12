import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { React, useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
} 
const CelebritiesList = (props) => {
    const {celebrity} = props;
    console.log("celebrity:",celebrity);
    const [isEditable, setEditable] = useState(false);
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return(
      <div style={{margin:"16px"}}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{display:"flex"}}>
            <img src={celebrity?.picture} width="30px" height="30px"/>
            <p style={{marginLeft:"20px"}}>{celebrity?.first} {celebrity?.last}</p>
            
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column"}}>
            <>
 <div style={{display:"flex",justifyContent:"space-between"}}>
  <div style={{display:"flex",flexDirection:"column"}}>
    <p>Age</p>
  {isEditable ? <TextField id="outlined-basic"  variant="outlined" /> : <p>{celebrity?.dob
}</p>}
  </div>
  
  
  <div style={{display:"flex",flexDirection:"column"}}>
    <p>Gender</p>
{isEditable ? <TextField id="outlined-basic"  variant="outlined" /> : <p>{celebrity?.gender
}</p>}
</div>
<div style={{display:"flex",flexDirection:"column"}}>
<p>Country</p>
{isEditable ? <TextField id="outlined-basic"  variant="outlined" /> : <p>{celebrity?.country

}</p>}
</div>
 </div>
 </>
 <div>
 <div style={{display:"flex",flexDirection:"column"}}>
<p>Description</p>
  {isEditable ? 
 <TextField
          id="outlined-textarea"
          
          placeholder="Placeholder"
          multiline
        />
        : <p>
          {celebrity?.description
}
        </p>
  }
  </div>

 </div>
 <div style={{display:"flex", justifyContent:"flex-end",marginTop:"20px"}}>
  {isEditable ? 
  <>
  <CancelIcon color="error" style={{marginRight:"16px",cursoe:"pointer"}}/>
  <CheckCircleIcon color="success" onClick={() => setEditable(true)} style={{cursor:"pointer"}}/></>: <><DeleteIcon color="error" style={{marginRight:"16px",cursoe:"pointer"}} onClick={handleClickOpen}/>
  <EditIcon color="primary" onClick={() => setEditable(true)} style={{cursor:"pointer"}}/> </>}
  
 </div>
 </div>
 <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Are You Sure, You Want To Delete
        </BootstrapDialogTitle>
       
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleClose}>
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
        </AccordionDetails>
      </Accordion>
      </div>
    )

}

export default CelebritiesList;