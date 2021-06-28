import React, {ChangeEvent, useState} from "react";

type EditStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const EditStatus = (props: EditStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status);

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false);
        props.updateStatus(props.status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.target.value)
    }

    return (
        <div>
            {
                !editMode &&
                    <div>
                        <span onDoubleClick={onEditMode}>{props.status === null ? "Change status" : props.status}</span>
                    </div>
            }
            {
                editMode &&
                <div>
                    <input
                        value={props.status}
                        onChange={onStatusChange}
                        onBlur={offEditMode}
                        autoFocus
                    />
                </div>
            }
        </div>
    )
}