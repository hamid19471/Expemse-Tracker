import React, { useState } from "react";
import styled from "styled-components";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const AddEspense = ({ income, expense }) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            <IncomeTag>
                <BalaceText>Balace : {income - expense}</BalaceText>
                <button onClick={() => setIsShow(!isShow)}>
                    {isShow ? "Cancel" : "Add"}
                </button>
            </IncomeTag>
            {isShow ? (
                <ExpenseFormDiv>
                    <ExpenseForm />
                </ExpenseFormDiv>
            ) : null}
            <ExpenseTag>
                <ExpanseTagInner borderColor="red" textColor="red">
                    Expense: {expense}$
                </ExpanseTagInner>
                <ExpanseTagInner>Income: {income}$</ExpanseTagInner>
            </ExpenseTag>
        </div>
    );
};

export default AddEspense;

const IncomeTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BalaceText = styled.p`
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const ExpenseTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
`;

const ExpanseTagInner = styled.div`
    width: 275px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid #ff4e4e 2px;
    border: solid 2px
        ${({ borderColor }) => (borderColor === "red" ? "#ff4e4e" : "#4eff98")};
    border-radius: 5px;
    color: ${({ textColor }) => (textColor === "red" ? "#ff4e4e" : "#4eff98")};
    font-size: 1.5rem;
`;

const ExpenseFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0 3rem;
    border: 2px solid #bebebe;
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
`;
