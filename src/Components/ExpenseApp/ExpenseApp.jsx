import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddEspense from "../AddExpense/AddEspense";
import TransActions from "../TeransAction/TransActions";

const ExpenseApp = () => {
    const [income, setIncom] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transAction, setTransAction] = useState([]);
    const addTransAction = (input) => {
        console.log(input);
        setTransAction([
            ...transAction,
            { ...input, id: Math.floor(Math.random() * 1000) },
        ]);
    };

    useEffect(() => {
        let income = 0;
        let expense = 0;
        transAction.map((item) =>
            item.type === "Expense"
                ? (expense += parseInt(item.amount))
                : (income += parseInt(item.amount)),
        );
        setIncom(income);
        setExpense(expense);
    }, [transAction]);
    return (
        <Container>
            <AddEspense
                income={income}
                expense={expense}
                addTransAction={addTransAction}
            />
            <TransActionDiv>
                <TransActions transAction={transAction} />
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
