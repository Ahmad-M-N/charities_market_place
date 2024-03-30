import { Outlet } from "react-router-dom";
import SERVER_URL from '../constants';

function CharityList(){
    // const [open, setOpen] = React.useState(false);
    // const [charities, setCharities]= React.useState([]);

    // const fetchCharities = (query) => {

    //     fetch(SERVER_URL+'api/charities'+query)
    //     .then(response => response.json())
    //     .then(responseData => setCharities(responseData._embedded.charities))
    //     .catch(err => console.error(err));

    // }

    // const onDelClick= (url) =>{
    //     if (window.confirm("Are you sure you want to delete?")){
    //         fetch(url, {method: 'DELETE'})
    //         .then(response => {

    //             if (response.ok){
    //                 fetchCharities(query); 
    //                 setOpen(true);
    //             }

    //             else {
    //                 alert('Something went wrong!');
    //             }

    //         })
    //         .catch(err => console.error(err))
    //     }
    // }

    // const addCharity = (charity) => {
    //     fetch(SERVER_URL + 'api/charities',
    //     {
    //         method: 'POST',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify(charity)
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             fetchCharities(query);
    //         }
    //         else {
    //             alert('Something went wrong!');
    //         }
    //     })
    //     .catch(err => console.error(err))
    // }
    
    // const updateCharity = (charity, link) => {
    //     fetch(link,
    //     {
    //         method: 'PUT',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify(charity)
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             fetchCharities(query);
    //         }
    //         else {
    //             alert('Something went wrong!');
    //         }
    //     })
    //     .catch(err => console.error(err))
    // } 

    // React.useEffect(()=>{
    //     fetchCharities(query)
    // }, []);

    // const columns = [
    //     {field: 'name', headerName: 'Name', width: 200},
    //     {field: 'city', headerName: 'City', width: 200},
    //     {field: 'catName', headerName: 'Category', width: 200},
    //     {field: 'website', headerName: 'Website', width: 150},
    //     {field: 'accountability_score', headerName: 'Accountability Score', width: 200},
    //     {field: 'fundraising_expenses', headerName: 'Fundraising Expenses', width: 200},
    //     {field: 'net_assets', headerName: 'Net Assets', width: 200},
    //     {field: 'excessDeficitForYear', headerName: 'Excess Or Deficit For Year', width: 200},
    //     {field: 'financial_score', headerName: 'Financial Score', width: 200},
    //     {
    //         field: '_links.self.href',
    //         headerName: '',
    //         sortable: false,
    //         filterable: false,
    //         renderCell: row =>  
    //             <IconButton onClick={()=> onDelClick(row.id)}>
    //                 <DeleteIcon color="error"/>
    //             </IconButton>
    //     },
    //     {
    //         field: '_links.charity.href',
    //         headerName: '',
    //         sortable: false,
    //         filterable: false,
    //         renderCell: row =>  
    //             <EditCharity
    //                 data={row}
    //                 updateCharity={updateCharity}
    //             />
    //     }
    // ];

    // function CustomToolbar(){
    //     return (
    //         <GridToolbarContainer className={gridClasses.toolbarContainer}>
    //             <GridToolbarExport/>
    //         </GridToolbarContainer>
    //     )
    // }
    return (
        <Outlet/>
    );

}

export default CharityList;