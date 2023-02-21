import Paragraph from '../../Components/Paragraph/Paragraph'
import './Profile.css'

export default function Profile() {
    return (
        <div className=''>


            <div className='profile-box'>
                <div className="profile-box__item">
                    <Paragraph className='profile-box__txt' pre>
                        {`22 года (родился 15 июля 2000), высшее образование\nКрым, Симферополь, Гражданство: Россия`}
                    </Paragraph>
                </div>
                <div className="profile-box__item">
                    <img src='https://wp-s.ru/wallpapers/9/18/438540442363429/izgib-reki-na-fone-zakata.jpg' className='profile-box__picture'></img>
                </div>
            </div>

            <div className="profile-description-block">
                <div className="profile-description-block__item">
                    <div className="profile-description-block__title">

                    </div>
                </div>
            </div>


        </div>
    )
}