import { Paper,Table, TableCell, TableHead, TableBody, TableRow, Button, Container, Typography } from "@mui/material";
import MonsterRow from "./MonsterRow";
import { useQuery } from "@tanstack/react-query";
import Monster from "../../types/Monster";
import { useState } from "react";
import CreateMonster from "./CreateMonster";




function MonsterIndex() {

  
    
    const[isOpen, setIsOpen] = useState(false)

    const {data, error, isLoading} = useQuery<Monster[], Error>({
            queryKey:['monsters'],
            queryFn: async function(): Promise<Monster[]> {
                const request = await fetch(import.meta.env.VITE_API_URL + "/monster/",{
                    method: 'GET'
                })
                const response = await request.json()
                console.table(response)
                return response
            }
    })

    const openCreateMonster = () => setIsOpen(true)
    
    const closeCreateMonster = () => setIsOpen(false)




    if(isLoading) return <div> Getting all the Monsters, Please wait.. </div>

    if(error) return <div> An error has occured, developers are hiding under the desk: {error.message} </div>


    return (

        <>
         <Container maxWidth="xl" sx= {{ width:'100%', textAlign: 'center', py: 5, backgroundColor: '#3f51b5' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Monster Show
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Explore the world of monsters, legends, and mysteries!
      </Typography>
    </Container>

    <br></br>
    <br></br>



        <Paper sx={{width:'100%',overflow: 'hidden'}}>
            <Button onClick = {openCreateMonster}>
                Create new Monster 

            </Button>

            <CreateMonster isOpen = {isOpen} onClose = {closeCreateMonster}/>

            <Table stickyHeader>
                <TableHead>
                    <TableRow> 
                        <TableCell align="center">
                <Button variant="contained" color="primary">
                    NAME
                </Button>
                    </TableCell>
                    
                        <TableCell align="center">
                <Button variant="contained" color="primary">
                    SPECIES
                </Button>
                    </TableCell>
                    
                    <TableCell align="center">
                <Button variant="contained" color="primary">
                    ATTACK POWER
                </Button>
                    </TableCell>
                    
                    <TableCell align="center">
                <Button variant="contained" color="primary">
                    DEFENSE POWER
                </Button>
                        
                    </TableCell>
                    
                    <TableCell align="center">
                <Button variant="contained" color="primary">
                    PRICE
                </Button>
                        
                        
                    </TableCell>

                    <TableCell align="center">
                <Button variant="contained" color="primary">
                    Update
                </Button>
            </TableCell>

            <TableCell align="center">
                <Button variant="contained" color="secondary">
                    Delete
                </Button>
            </TableCell>

                    </TableRow>
                   
                </TableHead>

                <TableBody>
                    
                    {
                        data?.map((monster) => (
                            <MonsterRow data ={monster} />
                    ))
                }
                
                </TableBody>
            </Table>
            </Paper>

            <br></br>

            {/* <Container maxWidth="xl" sx={{ textAlign: 'center', py: 3, mt: 5, backgroundColor: '#f4f4f4' }}>
            <Typography variant="body1">&copy; 2024 Monster Show. All rights reserved.</Typography>
            </Container> */}




            </>
    );




}

export default MonsterIndex;