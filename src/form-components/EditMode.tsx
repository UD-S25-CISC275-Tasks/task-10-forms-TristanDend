import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditing, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudentState] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                checked={isEditing}
                onChange={updateEditMode}
            ></Form.Check>
            <p>
                {isEditing ? (
                    <Form.Group>
                        <Form.Label>
                            Change username:
                            <Form.Control
                                value={userName}
                                onChange={(event) => {
                                    setUserName(event.target.value);
                                }}
                            ></Form.Control>
                        </Form.Label>
                        <Form.Label>
                            Change student state:
                            <Form.Check
                                label="Are you a student?"
                                checked={isStudent}
                                onChange={(event) => {
                                    setStudentState(event.target.checked);
                                }}
                            ></Form.Check>
                        </Form.Label>
                    </Form.Group>
                ) : (
                    <p>
                        {userName} is {!isStudent ? "not" : ""} a student
                    </p>
                )}
            </p>
        </div>
    );
}
