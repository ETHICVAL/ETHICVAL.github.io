import "./ContactContainer.css"
import phoneIcon from "../../images/icons8-phone-60.png"
import mailIcon from "../../images/icons8-mail-60.png"
export  default () => {
    return(
        <div className={"flex flex-col text-center mainContactContainer"}>
            <div className={"text-primary-500 contactItem"}><img src={phoneIcon} className={"contact-icon-png"}/> 91 94977 96454</div>
            <div className={"text-primary-500 contactItem"}><img src={phoneIcon} className={"contact-icon-png"}/> 91 62828 81515</div>
            <div className={"text-primary-500 contactItem"}><img src={mailIcon} className={"contact-icon-png"}/> <a href={"mailto:jacobdec4@gmail.com"}> jacobdec4@gmail.com</a></div>
            <div className={"text-primary-500 contactItem"}><img src={mailIcon} className={"contact-icon-png"}/> <a href={"mailto:ethicval@gmail.com"}> ethicval@gmail.com</a></div>
        </div>
    )
};