import React, { useState } from "react";
import styled from "styled-components";
import AddEspense from "../AddExpense/AddEspense";
import TransAction from "../TeransAction/TransAction";

const ExpenseApp = () => {
    const [income, setIncom] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transAction, setTransAction] = useState([]);
    return (
        <Container>
            <AddEspense income={income} expense={expense} />
            <TransActionDiv>
                <TransAction teransAction={transAction} />
            </TransActionDiv>
        </Container>
    );
};

export default ExpenseApp;

const Container = styled.div`
    width: 450px;
    align-items: center;
    justify-content: cente;
    margin: auto;
`;

const TransActionDiv = styled(Container)`
    margin-top: 3rem;
    font-size: 2rem;
`;
