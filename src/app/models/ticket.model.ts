export interface TicketModel {
    id: string;
    movie: {
      id: string;
      title: String;
      director: String;
      durationMinutes: Number;
      genre: String;
    };
    seatNumber: String;
    price: Number;
    customerName: String;
  }
  