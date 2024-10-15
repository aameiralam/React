



import { AppBar, Container, Typography, Button } from "@mui/material";
import HiveIcon from '@mui/icons-material/Hive';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    // Logout function to clear session and navigate to login page
    const handleLogout = () => {
        sessionStorage.removeItem("Authorization");
        alert("Logged out successfully");
        navigate("/login"); // Redirect to login page
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Icon and Title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <HiveIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none'
                        }}
                    >
                        Monster Show Hive
                    </Typography>
                </div>

              
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogout} // Trigger the logout function
                    sx={{ fontWeight: 'bold' }}
                >
                    Log Out
                </Button>
            </Container>
        </AppBar>
    );
}

export default Navbar;
