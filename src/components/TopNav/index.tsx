import React, { JSX } from 'react'
import { ReactComponent as Logo } from './assets/Gsynergy Logo V2 Long Description.svg';
import "./index.css"
import { IconButton } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const TopNav = (): JSX.Element => {
    return (
        <div className='top-nav'>
            <Logo data-testid="g-logo-test" height={75} />
            <IconButton data-testid="auth-button-test" className='profile-button'>
                <AccountBoxIcon />
            </IconButton>
        </div>
    )
}

export default TopNav