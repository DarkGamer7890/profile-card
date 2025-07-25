import { useReducer } from "react"
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={handleSubmit}> 
            <label>
                Name:

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "set_name", name: e.target.value})}
                />
            </label>

            <label>
                About:

                <textarea
                    placeholder="Enter about yourself"
                    value={state.about}
                    onChange={(e) => dispatch({ type: "set_about", about: e.target.value})}
                />
            </label>

            <label>
                Upload Image:

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => dispatch({ type: "set_image", image: e.target.files[0]})}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
      </>
  )
}

export default ProfileForm;