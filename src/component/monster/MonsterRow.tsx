import { TableCell, TableRow } from "@mui/material";
import Monster from "../../types/Monster";
import { useNavigate } from "react-router-dom";
import { Link as MuiLink } from '@mui/material';
import DeleteMonster from "./DeleteMonster";
import { useState } from "react";


function MonsterRow({data}:{data:Monster}) {

    const navigate = useNavigate()
    const {id, name, species, attackPower, defensePower, price} = data

    const [open,setOpen] = useState(false)
    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
       <TableRow key={id} hover tabIndex={-1}>
        <TableCell>
            {name}
        </TableCell>
        <TableCell>
            {species}
        </TableCell>
        <TableCell> 
            {attackPower}
        </TableCell>
        <TableCell>
            {defensePower}
        </TableCell>
        <TableCell>
            $ {price}
        </TableCell>
        {sessionStorage.getItem("Authorization") ?
        <>
        <TableCell>
            {/* <a onClick={() => navigate("/update", {state:data})}> Update Monster</a> if not using the hover effect */}
            <MuiLink
    component="button" // Makes it act as a button but look like a link
    onClick={() => navigate("/update", { state: data })}
    sx={{ cursor: 'pointer' }}
  >
    UPDATE MONSTER
  </MuiLink>
        </TableCell>

        <TableCell>
            <DeleteMonster id={id} open = {open} openModal={openModal} closeModal={closeModal}/>
        </TableCell>
        </>
        :null}
       </TableRow>
    );
}

export default MonsterRow;