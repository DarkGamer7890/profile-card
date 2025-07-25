import { useLocation } from "react-router-dom";
import "./ProfileCard.css"

function ProfileCard(){
    const location = useLocation();
    const {name, about, image} = location.state || {};

    return (
        <>
            <div className='main'>
                <div className="text">
                    <div className="text1">
                        <h1>Name: {name}</h1>
                    </div>
                    <div className="text2">
                        <h1>About:</h1>
                        <ul>
                            <h2>{about.split(/\. |\n/).map((sentence, index) => {return <li key={index}>{sentence}</li>})}</h2>
                        </ul>
                    </div>
                </div>
                <div className="image">
                    {image && <img src={URL.createObjectURL(image)} alt="profile-image" />}
                </div>
            </div>
        </>
    )
}

export default ProfileCard;