import * as React from "react";
import './QRImage.css'
import QR from "../images/image-qr-code.png"

class QRImage extends React.Component{
    render() {
        return (
            <div className="QRImage">
                <img src={QR} alt={"QR"}/>
            </div>
        );
    }
}

export default QRImage