
import MidiasStyle from "./midias.module.scss"



export default function Midias() {

    return (
        <div className={MidiasStyle.frameMidias}>
            <ul className={MidiasStyle.ulMidias} >
                <li className="liMidias" >
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1" />
                </li>
                <li className="liMidias" >
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/facebook--v1.png" alt="facebook--v1" />
                </li>
                <li className="liMidias" >
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/whatsapp--v1.png" alt="whatsapp--v1" />
                </li>
                <li className="liMidias" >
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/twitter--v1.png" alt="twitter--v1" />
                </li>
            </ul>
        </div>
    )
}

