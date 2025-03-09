import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setAnswer] = useState<string>("");

    function updateAnswer(answer: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(answer.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>
                    Type Answer:
                    <Form.Control
                        value={userAnswer}
                        onChange={updateAnswer}
                    ></Form.Control>
                </Form.Label>
            </Form.Group>
            <p>{userAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
