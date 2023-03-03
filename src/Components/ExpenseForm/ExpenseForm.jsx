import React from "react";
import styled from "styled-components";
const ExpenseForm = () => {
    return (
        <form>
            <InputDiv>
                <input
                    className="amount"
                    type="text"
                    name="Amount"
                    placeholder="Enter Amount ..."
                />
                <input
                    className="desc"
                    type="text"
                    name="Description"
                    placeholder="Enter Description ..."
                />
            </InputDiv>
            <SecondSection>
                <div>
                    <input type="radio" name="Income" placeholder="" />
                    <input type="radio" name="Income" placeholder="" />
                </div>
                <button className="formBtn">Save</button>
            </SecondSection>
        </form>
    );
};

export default ExpenseForm;

const InputDiv = styled.div`
    .amount,
    .desc {
        width: 100%;
        padding: 0.5rem;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #e1e1e1;
        margin-bottom: 1rem;
        color: black;
    }
`;

const SecondSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
