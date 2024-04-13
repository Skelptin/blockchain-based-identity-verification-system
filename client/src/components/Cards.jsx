import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
    <Box
        component="span"
        sx={{ mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <div className='flex gap-2 flex-wrap m-10 justify-center'>

            <Link to={'/verification-page/create-user'} className='hover:opacity-80 flex justify-center flex-col'>
                <Card sx={{
                    width: '25rem',
                    backgroundColor: '#242323',
                    color: 'white'
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'white' }} color="text.secondary" gutterBottom>
                            Create User
                        </Typography>
                        <Typography>
                            Create User
                        </Typography>
                    </CardContent>

                </Card>
            </Link>

            <Link to={'/verification-page/verify-user'}>
                <Card className='hover:opacity-80 flex justify-center flex-col' sx={{
                    width: '25rem',
                    backgroundColor: '#242323',
                    color: 'white'
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'white' }} color="text.secondary" gutterBottom>
                            Verify User
                        </Typography>
                        <Typography>
                            Verify User
                        </Typography>
                    </CardContent>

                </Card>
            </Link>


            <Link>
                <Card className='hover:opacity-80 flex justify-center flex-col' sx={{
                    width: '25rem',
                    backgroundColor: '#242323',
                    color: 'white'
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'white' }} color="text.secondary" gutterBottom>
                            Send Access Request
                        </Typography>
                        <Typography>
                            Send Access Request
                        </Typography>
                    </CardContent>

                </Card>
            </Link>


            <Link>
                <Card className='hover:opacity-80 flex justify-center flex-col' sx={{
                    width: '25rem',
                    backgroundColor: '#242323',
                    color: 'white'
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'white' }} color="text.secondary" gutterBottom>
                            User Profile
                        </Typography>
                        <Typography>
                            User Profile
                        </Typography>
                    </CardContent>

                </Card>
            </Link>


            <Link>
                <Card className='hover:opacity-80 flex justify-center flex-col' sx={{
                    width: '25rem',
                    backgroundColor: '#242323',
                    color: 'white'
                }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'white' }} color="text.secondary" gutterBottom>
                            Create User
                        </Typography>
                        <Typography>
                            Create Usert
                        </Typography>
                    </CardContent>

                </Card>
            </Link>

        </div>
    );
}