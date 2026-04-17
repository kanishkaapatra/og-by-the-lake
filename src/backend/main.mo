import List "mo:core/List";
import ReservationTypes "types/reservations";
import ReservationsMixin "mixins/reservations-api";

actor {
  let reservations = List.empty<ReservationTypes.Reservation>();

  include ReservationsMixin(reservations);
};
