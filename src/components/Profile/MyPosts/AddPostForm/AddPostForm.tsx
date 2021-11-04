import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../../../common/FormControls/FormControls";
import {required} from "../../../../utils/validation/validators";

type PropsType = {}
export type AddPostValuesType = {
    newPostBody: string
}
type AddPostValuesTypeKeys = GetStringKeys<AddPostValuesType>
const AddPostForm: React.FC<InjectedFormProps<AddPostValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostValuesTypeKeys>("Your post", 'newPostBody', [required], Input)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm<AddPostValuesType, PropsType>({form: 'profile-add-post'})(AddPostForm)