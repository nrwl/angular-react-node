import { Controller, Get } from '@nestjs/common';
import { Ticket } from '@mycompany/api-types';

@Controller()
export class AppController {
  @Get('tickets')
  getTickets(): Ticket[] {
    return [
      {
        title: `Computer doesn't work. Fix it!`,
        adminComment: 'The computer works! Victor is mistaken'
      },
      {
        title: `The chair is broken!`
      }
    ];
  }
}
