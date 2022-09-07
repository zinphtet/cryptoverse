import './Footer.scss'

const Footer = ()=>{
    return  (
        <div className="footer">
              <p className="footer_title">
                Cryptoverse Inc. @ {new Date().getFullYear()}
              </p>
              <p className="copy">
                All rights reserved 
              </p>
        </div>
    )
}

export default Footer ;