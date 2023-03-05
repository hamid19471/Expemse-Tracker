import React from "react";
import styled from "styled-components";
const TransActions = ({ transAction }) => {
    return (
        <div>
            {transAction.map((item) => {
                if (item.type === "Expense") {
                    return (
                        <TransActionCard key={item.id} isType="Expense">
                            <p>{item.description}</p>
                            <p>{item.amount}</p>
                        </TransActionCard>
                    );
                } else {
                    return (
                        <TransActionCard TransActionCard key={item.id}>
                            <p>{item.description}</p>
                            <p>{item.amount}</p>
                        </TransActionCard>
                    );
                }
            })}
        </div>
    );
};

export default TransActions;

const TransActionCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 2px
        ${({ isType }) => (isType === "Expense" ? "#ff4e4e" : "#4eff98")};
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    p {
        margin: 0.4rem;
    }
`;
