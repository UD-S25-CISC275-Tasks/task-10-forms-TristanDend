import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestAttempts] = useState<number>(0);

    function gainAttempts() {
        setAttempts(requestedAttempts + attempts || attempts);
    }

    function useAttempts() {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attempts}</span>
            <Form.Group>
                <Form.Label>
                    Attempts Requested:
                    <Form.Control
                        type="number"
                        onChange={(event) => {
                            setRequestAttempts(
                                parseInt(event.target.value) || 0
                            );
                        }}
                    ></Form.Control>
                </Form.Label>
            </Form.Group>
            <Button onClick={useAttempts} disabled={attempts < 1}>
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
