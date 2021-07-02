import React, {ChangeEvent, useEffect, useState} from "react";

type EditStatusPropsType = {
    status: string,
    disabled?: boolean
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
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }

    useEffect(() => setStatus(props.status), [props.status]);

    return (
        <div>
            {
                !editMode &&
                    <div>
                        <span onDoubleClick={onEditMode}>
                            {status === null ? "Change status" : status}
                        </span>
                    </div>
            }
            {
                editMode &&
                <div>
                    <input
                        value={status}
                        onChange={onStatusChange}
                        onBlur={offEditMode}
                        autoFocus
                    />
                </div>
            }
        </div>
    )
}