// import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

// function DeleteMonster({id, open, closeModal, openModal}:{id:number, open: boolean, closeModal: ()=> void, openModal: ()=> void}) {


//     const queryClient = useQueryClient();

//     const deleteMonster = async () => {
//         const request =    await fetch(import.meta.env.VITE_API_URL + "/monster/delete/" + id, {
//             method:'DELETE'
//         })

        

//         const response = request.json()
//         return response;
//     }

//     const mutation = useMutation({
//         mutationFn: deleteMonster, 
//         onSuccess: () => {
//             alert("Monster has been deleted successfully")
//             queryClient.invalidateQueries()
//             closeModal()
//         }
//     })





//     return (
//         <>
        
//         <Button onClick={openModal}>

//         Delete Monster 


//         </Button>
//         <Modal
//         open = {open}
//         onClose={closeModal}
//         >
//         <Box >

//         <Typography variant="h3">

//             Do you want to delete this monster?



//         </Typography>
//         <br />
//         <ButtonGroup
//         variant="contained">
//             <button onClick= {() => mutation.mutate()}>
//                 Yes
//             </button>
//             <button onClick ={closeModal} >
//                 No
//             </button>

//         </ButtonGroup>
        

//         </Box>


//         </Modal>
        
        
//         </>
//     );
// }

// export default DeleteMonster;

import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function DeleteMonster({
    id,
    open,
    closeModal,
    openModal,
}: {
    id: number;
    open: boolean;
    closeModal: () => void;
    openModal: () => void;
}) {
    const queryClient = useQueryClient();

    const deleteMonster = async () => {
        const request = await fetch(
            import.meta.env.VITE_API_URL + "/monster/delete/" + id,
            {
                method: "DELETE",
            }
        );

        const response = await request.json();
        return response;
    };

    const mutation = useMutation({
        mutationFn: deleteMonster,
        onSuccess: () => {
            alert("Monster has been deleted successfully");
            queryClient.invalidateQueries();
            closeModal();
        },
    });

    return (
        <>
            <Button onClick={openModal}>Delete Monster</Button>
            <Modal open={open} onClose={closeModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        width: '400px', // Set a width for the modal
                        textAlign: 'center', // Center text inside the Box
                        cursor:'pointer'
                    }}
                >
                    <Typography variant="h6">Do you want to delete this monster?</Typography>
                    <br />
                    <ButtonGroup variant="contained">
                        <Button onClick={() => mutation.mutate()}>Yes</Button>
                        <Button onClick={closeModal}>No</Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </>
    );
}

export default DeleteMonster;
