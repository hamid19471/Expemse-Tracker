import React, { useState } from "react";
import styled from "styled-components";
const ExpenseForm = ({ addTransAction }) => {
    const [formValues, setFormValues] = useState({
        type: "Expense",
        amount: 0,
        description: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addTransAction(formValues);
        setFormValues({
            type: "Expense",
            amount: 0,
            description: "",
        });
    };

    const handleFormInputValue = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <InputDiv>
                <input
                    className="amount"
                    type="number"
                    name="amount"
                    required
                    autoFocus
                    placeholder="Enter Amount ..."
                    onChange={handleFormInputValue}
                    value={formValues.amount}
                />
                <input
                    className="desc"
                    type="text"
                    name="description"
                    required
                    placeholder="Enter Description ..."
                    onChange={handleFormInputValue}
                    value={formValues.description}
                />
            </InputDiv>
            <SecondSection>
                <RadioBtnDiv>
                    <div className="income">
                        <input
                            type="radio"
                            name="type"
                            value="Income"
                            onChange={handleFormInputValue}
                            checked={formValues.type === "Income"}
                        />
                        <label>Income</label>
                    </div>
                    <div className="expense">
                        <input
                            type="radio"
                            name="type"
                            value="Expense"
                            onChange={handleFormInputValue}
                            checked={formValues.type === "Expense"}
                        />
                        <label>Expense</label>
                    </div>
                </RadioBtnDiv>
                <button className="formBtn" type="submit">
                    Save
                </button>
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

const RadioBtnDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    .expense {
        color: #ff4e4e;
    }
    .income {
        color: #4eff98;
    }
    text-transform: uppercase;
    input[type="radio"] {
        transform: scale(1.4);
        margin: 0 0.5rem;
    }
`;
