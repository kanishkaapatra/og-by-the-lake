import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/reservations";

module {
  public func submitReservation(
    reservations : List.List<Types.Reservation>,
    nextId : Nat,
    input : Types.ReservationInput,
  ) : (Types.SubmitResult, Nat) {
    if (input.name == "") {
      return (#err("Name is required"), nextId);
    };
    if (input.phone == "") {
      return (#err("Phone number is required"), nextId);
    };
    if (input.partySize < 1) {
      return (#err("Party size must be at least 1"), nextId);
    };

    let id = nextId + 1;
    let reservation : Types.Reservation = {
      id;
      name = input.name;
      phone = input.phone;
      email = input.email;
      date = input.date;
      time = input.time;
      partySize = input.partySize;
      specialRequests = input.specialRequests;
      createdAt = Time.now();
    };
    reservations.add(reservation);
    (#ok(id), id);
  };

  public func getAllReservations(
    reservations : List.List<Types.Reservation>
  ) : [Types.Reservation] {
    reservations.toArray();
  };
};
