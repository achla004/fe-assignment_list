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
    const [isEditable, setEditable] = useState(false);
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return(
      <div style={{margin:"16px",width:"600px",border:"1px solid gray",borderRadius:"4px"}}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{display:"flex",alignItems:"center"}}>
            <img src={celebrity?.picture} alt="celebrity" style={{borderRadius: "100px",border: "1px solid gray"}}/>
            <p style={{marginLeft:"20px"}}>{celebrity?.first} {celebrity?.last}</p>
            
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex", flexDirection:"column"}}>
            <>
 <div style={{display:"flex",justifyContent:"space-between"}}>
  <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
    <p style={{marginBottom:"2px"}}>Age</p>
  {isEditable ? <TextField id="outlined-basic"  variant="outlined" value={celebrity?.dob}/> : <p>{celebrity?.dob
}</p>}
  </div>
  
  
  <div style={{display:"flex",flexDirection:"column",marginLeft:"4px",justifyContent:"flex-start",alignItems:"flex-start"}}>
    <p style={{marginBottom:"2px"}}>Gender</p>
{isEditable ? <TextField id="outlined-basic"  variant="outlined" value={celebrity?.gender}/> : <p>{celebrity?.gender
}</p>}
</div>
<div style={{display:"flex",flexDirection:"column",marginLeft:"4px",justifyContent:"flex-start",alignItems:"flex-start"}}>
<p style={{marginBottom:"2px"}}>Country</p>
{isEditable ? <TextField id="outlined-basic"  variant="outlined" value={celebrity?.country} style={{borderRadius:"6px"}} /> : <p>{celebrity?.country

}</p>}
</div>
 </div>
 </>
 <div>
 <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
<p style={{marginBottom:"2px"}}>Description</p>
  {isEditable ? 
 <TextField
          id="outlined-textarea"
          style={{width:"-webkit-fill-available"}}
          placeholder="Placeholder"
          multiline
          value={celebrity?.description}
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
  <CancelIcon color="error" style={{marginRight:"16px",cursoe:"pointer"}} onClick={()=>setEditable(false)}/>
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