import React, { useState } from "react";
import styled from "styled-components";
const ExpenseApp = () => {
    const [income, setIncom] = useState(0);
    const [expense, setExpense] = useState(0);
    return (
        <Container>
            <IncomeTag>
                <BalaceText>Balace : {expense - income}</BalaceText>
                <button>Add</button>
            </IncomeTag>
            <ExpenseTag>
                <ExpanseTagInnerleft>oen</ExpanseTagInnerleft>
                <div>two</div>
            </ExpenseTag>
        </Container>
    );
};

export default ExpenseApp;

const Container = styled.div`
    width: 350px;
    align-items: center;
    justify-content: cente;
    margin: auto;
`;

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

const ExpanseTagInnerleft = styled.div`
    width: 175px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid #ff4e4e 2px;
    border-radius: 5px;
`;
