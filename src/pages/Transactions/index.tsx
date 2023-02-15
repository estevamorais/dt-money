import { useContext } from 'react'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { dateFormatter, priceFormatter } from '../../utils/formatter'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transction) => (
              <tr key={transction.id}>
                <td width="50%">{transction.description}</td>
                <td>
                  <PriceHighlight variant={transction.type}>
                    {transction.type === 'outcome' && '- '}
                    {priceFormatter.format(transction.price)}
                  </PriceHighlight>
                </td>
                <td>{transction.category}</td>
                <td>{dateFormatter.format(new Date(transction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
