import * as React from "react";
import './MyCard.css';
import Card from '@mui/material/Card';
import QRImage from "./QRImage";

class MyCard extends React.Component {
    render() {
        return (
            <div className="MyCard">
                <Card style={{ borderRadius: '20px' }}>
                    <div className="Image">
                        <QRImage/>
                    </div>
                    <div className="Text">
                        <h2>Improve your front-end skills by building projects</h2>
                        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </Card>
            </div>
        );
    }
}

export default MyCard;