import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';

import './app.css';
import { Ticket } from '@mycompany/api-types';

export class App extends Component<{}, { tickets: Ticket[] }> {
  state = {
    tickets: []
  };

  async componentWillMount() {
    const { data: tickets } = await axios('/api/tickets');
    this.setState({ tickets });
  }

  render() {
    return (
      <>
        <mycompany-header title={'Tickets admin!'} />
        <ul>
          {this.state.tickets.map(t => (
            <li key={t.title}>
              {t.title} | {t.adminComment}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
