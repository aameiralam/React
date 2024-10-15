

import { Box, Button, FormControl, Input, InputLabel, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            role: "USER"
        },
        onSubmit: async (values) => {
            // Handle form submission
            const request = await fetch(import.meta.env.VITE_API_URL + "/auth/register", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (!request.ok) {
                const errorMessage = await request.text();
                throw new Error(errorMessage);
            } else {
                alert("New User has been created");
                navigate("/login");
            }
        }
    });

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: 3,
                backgroundColor: '#f5f5f5'
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 3 }}>
                Sign Up & Enjoy the Monster Show
            </Typography>

            <FormControl sx={{ marginBottom: 2, width: '300px' }}>
                <InputLabel htmlFor="email"> Enter your Email</InputLabel>
                <Input
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    fullWidth
                />
            </FormControl>

            <FormControl sx={{ marginBottom: 2, width: '300px' }}>
                <InputLabel htmlFor="password"> Enter your Password</InputLabel>
                <Input
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="password"
                    fullWidth
                />
            </FormControl>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: '300px', padding: '10px 0', marginBottom: 2 }}
            >
                Sign Up
            </Button>

            {/* Login button */}
            <Button
                variant="outlined"
                color="primary"
                sx={{ width: '300px', padding: '10px 0' }}
                onClick={() => navigate("/login")}
            >
                Already have an account? Log In
            </Button>
        </Box>
    );
}

export default Register;

