import { useLocation } from "react-router-dom";
import "./ProfileCard.css"

function ProfileCard(){
    const location = useLocation();
    const {name, about, image} = location.state || {};

    return (
        <>
            <div className='main'>
                <div className="text">
                    <h1>Name: {name}</h1>
                    <h1>About:</h1>
                    <h2>{about}</h2>
                </div>
                <div className="image">
                    {image && <img src={URL.createObjectURL(image)} alt="profile-image" />}
                </div>
            </div>
        </>
    )
}

export default ProfileCard;