import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class TableWallet extends Component {
  render() {
    return (
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <td>teste</td>
          </tr>
          <tr>
            <td>teste</td>
          </tr>
          <tr>
            <td className="table-active">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
