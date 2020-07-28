import React from 'react'
import Button from '@material-ui/core/Button';
import history from './history'
export default function Helper() {
    return (
        <div>
            <Button onClick={() => history.push("/helpline")}>Helpline Form</Button>
            <Button onClick={() => history.push("/helpsearch")}> Helpline Search</Button>
        </div>
    );
}