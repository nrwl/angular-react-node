import * as React from 'react';
import { Component } from 'react';

import './app.css';
import { Ticket } from '@mycompany/api-types';

export class App extends Component<{}, { tickets: Ticket[] }> {
  componentWillMount(): void {
    fetch('/api/tickets').then(r => r.json()).then(tickets => {
      this.setState({ tickets });
    });
  }

  render() {
    const tickets = (this.state && this.state.tickets) ? this.state.tickets.map(t => (
      <li>{t.title} | {t.adminComment}</li>)) : [];
    return (
      <>
        <mycompany-header title={'Tickets admin!'}/>

        <ul>
          {tickets}
        </ul>
      </>
    );
  }
}
