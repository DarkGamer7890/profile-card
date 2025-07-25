import { useReducer } from "react"
import { useNavigate } from "react-router-dom";
import "./ProfileForm.css"

const initialState = {
    name: "",
    about: "",
    image: null
}

const reducer = (state, action) => {
    switch (action.type){
        case "set_name":
            return {...state, name: action.name};

        case "set_about":
            return {...state, about: action.about};

        case "set_image":
            return {...state, image: action.image};

        default:
            return initialState;
    }
}

function ProfileForm(){
    const [state, dispatch] = useReducer(reducer, initialState)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("ProfileCard.jsx", { state })
    }

    return (
      <>
        <form className="form" onSubmit={handleSubmit}> 
            <label id="label1">
                <h2>Name:</h2>

                <input
                    id="name
                    "
                    type="text"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "set_name", name: e.target.value})}
                />
            </label>

            <label id="label2">
                <h2>About:</h2>

                <textarea
                    id="about"
                    placeholder="Enter about yourself"
                    value={state.about}
                    onChange={(e) => dispatch({ type: "set_about", about: e.target.value})}
                />
            </label>

            <label id="label3">
                <h2>Upload Image:</h2>

                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => dispatch({ type: "set_image", image: e.target.files[0]})}
                />
            </label>
            <button id = "button" type="submit">Submit</button>
        </form>
      </>
  )
}

export default ProfileForm;