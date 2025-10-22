import styled from 'styled-components';
import {useEffect, useState} from 'react';

const StyledCalc = styled.div`
    padding:20px;
    align-content: center;
    margin:0 auto;
    width:70%;
    height:50%;
    background-color:lightgray;
    border-radius:5px;
    border:1px #2f2f2f solid;
    font-family: monospace;
    font-size: calc(10px + .5vw);
`

export default function Calculator() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [output, setOutput] = useState(0);

    const [isNeg, setIsNeg] = useState(false);

    useEffect(() => {
        setIsNeg(output<0);
    }, [output]);

    function doAdd() {
        setOutput(value1 + value2);
    }
    function doSubtract() {
        setOutput(value1 - value2);
    }
    function doMultiply() {
        setOutput(value1 * value2);
    }
    function doDivision() {
        setOutput(value1 / value2);
    }
    function doPower() {
        setOutput(value1**value2);
    }

    function clearCalc() {
        setValue1(0);
        setValue2(0);
        setOutput(0);
    }


    return (
        <StyledCalc>
            <p>Pick 2 numbers!</p>
            <div id="inputs">
                <label htmlFor="one"></label><input type="text" id="one" value={value1} onChange={(e)=> setValue1(Number(e.target.value))}/>
                <label htmlFor="two"></label><input type="text" id="two" value={value2} onChange={(e)=> setValue2(Number(e.target.value))}/>
            </div>

            <div id="buttons">
                <button onClick={doAdd}>+</button>
                <button onClick={doSubtract}>-</button>
                <button onClick={doMultiply}>*</button>
                <button onClick={doDivision}>/</button>
                <button onClick={doPower}>**</button>
                <button onClick={clearCalc}>Clear</button>
            </div>

            <div>
                <p>Output: </p>
                <h4
                    style={{
                    color: isNeg ? 'red' : 'black',}}
                >
                    {output}
                </h4>
            </div>
        </StyledCalc>
    )
}