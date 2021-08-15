import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode &&
        <div>
            <span style={{paddingLeft: '10px'}} onDoubleClick={activateEditMode}><b>My status</b>: {props.status || 'add status'}</span>
        </div>
        }
        {editMode &&
        <div>
            <input
                onBlur={deActivateEditMode}
                onChange={onStatusChange}
                autoFocus={true}
                value={status}
            />
        </div>
        }
    </div>
}


export default ProfileStatusWithHooks;