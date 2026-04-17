import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    id: ReservationId;
    date: string;
    name: string;
    specialRequests: string;
    createdAt: bigint;
    time: string;
    email: string;
    partySize: bigint;
    phone: string;
}
export type SubmitResult = {
    __kind__: "ok";
    ok: ReservationId;
} | {
    __kind__: "err";
    err: string;
};
export type ReservationId = bigint;
export interface ReservationInput {
    date: string;
    name: string;
    specialRequests: string;
    time: string;
    email: string;
    partySize: bigint;
    phone: string;
}
export interface backendInterface {
    getAllReservations(): Promise<Array<Reservation>>;
    submitReservation(input: ReservationInput): Promise<SubmitResult>;
}
