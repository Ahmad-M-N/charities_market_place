import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent"; 
import DialogTitle from "@mui/material/DialogTitle";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";


function EditCharity(props) {

    const [open, setOpen] = React.useState(false);
    const [charity, setCharity] = React.useState(
        {
            name: '',
            city: '',
            catName:'',
            website:'',
            accountability_score: '',
            fundraising_expenses:'',
            net_assets:'',
            excessDeficitForYear:'',
            financial_score:''
        });
    
    
    const handleClickOpen = () =>{
        setCharity(
            {
                name :                  props.data.row.name,
                city :                  props.data.row.city,
                catName :               props.data.row.catName,
                website :               props.data.row.website,
                accountability_score :  props.data.row.accountability_score,
                fundraising_expenses :  props.data.row.fundraising_expenses,
                net_assets :            props.data.row.net_assets,
                excessDeficitForYear :  props.data.row.excessDeficitForYear,
                financial_score :       props.data.row.financial_score
            })
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleChange = (event) =>{
        setCharity({...charity, [event.target.name] : event.target.value})
    }

    const handleSave =()=>{
        props.updateCharity(charity, props.data.id);
        handleClose();
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <EditIcon color="primary"/>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Charity</DialogTitle>
                <DialogContent>
                <Stack spacing={2} mt={1} display="flex">
                        <div className="Form-Div">
                        <TextField label="Name" name="name"
                            autofocus variant="standard"
                            value = {charity.name} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}

                        />
                        <TextField label="City" name="city"
                            variant="standard"
                            value = {charity.city} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <br/><br/>
                        <TextField label="Category Name" name="catName"
                            variant="standard"
                            value = {charity.catName} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <TextField label="Website" name="website"
                            variant="standard"
                            value = {charity.website} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <br/><br/>
                        <TextField label="Accountability Score" name="accountability_score"
                            variant="standard"
                            value = {charity.accountability_score} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <TextField label="Fundraising Expenses" name="fundraising_expenses"
                            variant="standard"
                            value = {charity.fundraising_expenses} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <br/><br/>
                        <TextField label="Net Assets" name="net_assets"
                            variant="standard"
                            value = {charity.net_assets} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <TextField label="Excess Or Deficit For Year" name="excessDeficitForYear"
                            variant="standard"
                            value = {charity.excessDeficitForYear} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        <br/><br/>
                        <TextField label="Financial Score" name="financial_score"
                            variant="standard"
                            value = {charity.financial_score} onChange={handleChange}
                            sx={{width:230, flex:1, padding:1}}
                        />
                        </div>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick ={handleClose}>Cancel</Button>
                    <Button onClick ={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}

export default EditCharity;