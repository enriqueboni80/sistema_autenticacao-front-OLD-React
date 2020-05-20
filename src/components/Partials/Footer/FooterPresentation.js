import React from "react"
import { Link } from "react-router-dom"

const FooterPresentation = (props) => {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; Your Website 2019</div>
                    <div>
                        <Link to="#">Privacy Policy</Link>
                        &middot;
                        <Link to="#">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterPresentation