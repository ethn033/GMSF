import { Vehicle } from "./vehicle";

export class ApplicationUser {
    guidId: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    city: string;
    postalCode: string;
    noOfCars: number;
    vehicles: Vehicle[]; // Change 'any' to a more specific type if known
    id: number;
    userName: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    passwordHash: string | null;
    securityStamp: string;
    concurrencyStamp: string;
    phoneNumber: string;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnd: Date; // Use Date for date fields
    lockoutEnabled: boolean;
    accessFailedCount: number;
}