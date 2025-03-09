import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [colorSelected, setColor] = useState<string>("");

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Red"
                value="red"
                style={{ backgroundColor: "red" }}
                checked={colorSelected === "red"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Orange"
                value="orange"
                style={{ backgroundColor: "orange" }}
                checked={colorSelected === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Yellow"
                value="yellow"
                style={{ backgroundColor: "yellow" }}
                checked={colorSelected === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Green"
                value="green"
                style={{ backgroundColor: "green" }}
                checked={colorSelected === "green"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Blue"
                value="blue"
                style={{ backgroundColor: "blue" }}
                checked={colorSelected === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Purple"
                value="purple"
                style={{ backgroundColor: "purple" }}
                checked={colorSelected === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="White"
                value="white"
                style={{ backgroundColor: "white" }}
                checked={colorSelected === "white"}
            />
            <Form.Check
                inline
                type="radio"
                onChange={changeColor}
                label="Black"
                value="black"
                style={{ backgroundColor: "black" }}
                checked={colorSelected === "black"}
            />
            <div
                data-testid="colored-box"
                style={{ backgroundColor: colorSelected }}
            >
                You have chosen{" "}
                <text style={{ backgroundColor: colorSelected }}>
                    {colorSelected}
                </text>
                .
            </div>
        </div>
    );
}
