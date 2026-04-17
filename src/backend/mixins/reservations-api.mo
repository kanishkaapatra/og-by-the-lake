import List "mo:core/List";
import Types "../types/reservations";
import ReservationsLib "../lib/reservations";

mixin (reservations : List.List<Types.Reservation>) {
  var nextReservationId : Nat = 0;

  public func submitReservation(input : Types.ReservationInput) : async Types.SubmitResult {
    let (result, newId) = ReservationsLib.submitReservation(reservations, nextReservationId, input);
    switch (result) {
      case (#ok(_)) { nextReservationId := newId };
      case (#err(_)) {};
    };
    result;
  };

  public query func getAllReservations() : async [Types.Reservation] {
    ReservationsLib.getAllReservations(reservations);
  };
};
