import React from 'react';
import { Button} from '@ui-kitten/components';
import FacebookIcon from "../FacebookIcon";

const LoginButton = () => {
    return (
        <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
    );
};

export default LoginButton;
