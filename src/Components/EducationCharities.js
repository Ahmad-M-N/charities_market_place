import React from 'react';
import {SERVER_URL} from '../constants';
import AddCharity from "./AddCharity";
import EditCharity from "./EditCharity";
import {DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses} from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from '@mui/material';


function EducationCharities(){
    const [open, setOpen] = React.useState(false);
    const [charities, setCharities]= React.useState([]);

    const fetchCharities = () => {
        const token= sessionStorage.getItem('jwt');

        fetch(SERVER_URL+'api/charities/search/findByCatName?catName=education', {headers: {'Authorization': token}})
        .then(response => response.json())
        .then(responseData => setCharities(responseData._embedded.charities))
        .catch(err => console.error(err));

    }

    const onDelClick= (url) =>{
        const token= sessionStorage.getItem('jwt');
        if (window.confirm("Are you sure you want to delete?")){
            fetch(url, {method: 'DELETE', headers: {'Authorization': token}})
            .then(response => {

                if (response.ok){
                    fetchCharities(); 
                    setOpen(true);
                }

                else {
                    alert('Something went wrong!');
                }

            })
            .catch(err => console.error(err))
        }
    }

    const addCharity = (charity) => {
        const token=sessionStorage.getItem('jwt')
        fetch(SERVER_URL + 'api/charities',
        {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'Authorization': token},
            body: JSON.stringify(charity)
        })
        .then(response => {
            if (response.ok) {
                fetchCharities();
            }
            else {
                alert('Something went wrong!');
            }
        })
        .catch(err => console.error(err))
    }
    
    const updateCharity = (charity, link) => {
        const token = sessionStorage.getItem('jwt');
        fetch(link,
        {
            method: 'PUT',
            headers: {'Content-Type':'application/json', 'Authorization': token},
            body: JSON.stringify(charity)
        })
        .then(response => {
            if (response.ok) {
                fetchCharities();
            }
            else {
                alert('Something went wrong!');
            }
        })
        .catch(err => console.error(err))
    } 

    React.useEffect(()=>{
        fetchCharities()
    }, []);

    const userColumns=[
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'city', headerName: 'City', width: 100},
        {field: 'catName', headerName: 'Category', width: 200},
        {field: 'accountability_score', headerName: 'Accountability Score', width: 145},
        {field: 'fundraising_expenses', headerName: 'Fundraising Expenses', width: 165},
        {field: 'net_assets', headerName: 'Net Assets', width: 105},
        {field: 'excessDeficitForYear', headerName: 'Excess Or Deficit For Year', width: 180},
        {field: 'financial_score', headerName: 'Financial Score', width: 115},
        {
            field: 'website', 
            headerName: 'Website', 
            width: 80,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Link rel="noopener noreferrer" href={`${params.value}`} target="_blank">URL</Link>
            )
        }
    ];

const adminColumns=
    [
        {field: 'name', headerName: 'Name', width: 200},
        {field: 'city', headerName: 'City', width: 100},
        {field: 'catName', headerName: 'Category', width: 200},
        {field: 'accountability_score', headerName: 'Accountability Score', width: 145},
        {field: 'fundraising_expenses', headerName: 'Fundraising Expenses', width: 165},
        {field: 'net_assets', headerName: 'Net Assets', width: 105},
        {field: 'excessDeficitForYear', headerName: 'Excess Or Deficit For Year', width: 180},
        {field: 'financial_score', headerName: 'Financial Score', width: 115},
        {
            field: 'website', 
            headerName: 'Website', 
            width: 80,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Link rel="noopener noreferrer" href={`${params.value}`} target="_blank">URL</Link>
            )
        },
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filterable: false,
            width: 40,
            renderCell: row =>  
                <IconButton onClick={()=> onDelClick(row.id)}>
                    <DeleteIcon color="error"/>
                </IconButton>
        },
        {
            field: '_links.charity.href',
            headerName: '',
            sortable: false,
            filterable: false,
            width: 40,
            renderCell: row =>  
                <EditCharity
                    data={row}
                    updateCharity={updateCharity}
                />
        }
    ];

    function CustomToolbar(){
        return (
            <GridToolbarContainer className={gridClasses.toolbarContainer}>
                <GridToolbarExport/>
            </GridToolbarContainer>
        )
    }

    return (

        <React.Fragment>
            <Stack alignItems="center" textAlign='left'>
                <div style={{width:'92%'}}>
                    <h1 className='Category-Headings'> Category: Education</h1>
                </div>
            </Stack>
            {localStorage.getItem('role')==="ADMIN" && 
            <Stack mt={2} mb={2}>
                <AddCharity addCharity={addCharity} />
            </Stack>}
            
            <Stack alignItems="center" justifyContent="center">
                
                <div style={{ height: 450, width: '92%'}}>
                    {localStorage.getItem('role')==="ADMIN" && 
                    <DataGrid 
                        rows={charities}
                        columns={adminColumns}
                        disableRowSelectionOnClick={true}
                        getRowId={row=> row._links.self.href}
                        components={{Toolbar: CustomToolbar}}
                    />}
                    {localStorage.getItem('role')==="USER" && 
                    <DataGrid 
                        rows={charities}
                        columns={userColumns}
                        disableRowSelectionOnClick={true}
                        getRowId={row=> row._links.self.href}
                        components={{Toolbar: CustomToolbar}}
                    />}

                    <Snackbar
                        open={open}
                        autoHideDuration={2000}
                        onClose={()=> setOpen(false)}
                        message= "Charity Deleted"
                    />
                </div>
            </Stack>                
        </React.Fragment>

    );
}

export default EducationCharities;