import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { History } from './components/History';
import { NewTransaction } from './components/NewTransaction';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
        <NewTransaction />
      </div>
    </>
  );
}

export default App;
