module {
  public type ReservationId = Nat;

  public type Reservation = {
    id : ReservationId;
    name : Text;
    phone : Text;
    email : Text;
    date : Text;
    time : Text;
    partySize : Nat;
    specialRequests : Text;
    createdAt : Int;
  };

  public type ReservationInput = {
    name : Text;
    phone : Text;
    email : Text;
    date : Text;
    time : Text;
    partySize : Nat;
    specialRequests : Text;
  };

  public type SubmitResult = {
    #ok : ReservationId;
    #err : Text;
  };
};
