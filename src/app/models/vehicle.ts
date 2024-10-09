import { EnumFuelType } from "../enums/enumFuelType";

export class Vehicle {
    id: number;
    guidId: string;
    createdAt: Date;
    updatedAt: Date;
    brand: string;
    modelName: string;
    modelYear: string;
    numberPlate: string;
    color: string;
    vin: string;
    type: string; // e.g., car, truck, jeep, etc.
    odoMeterReading: number;
    fuelType: EnumFuelType; // Use the EnumFuelType enum
    gearBox: number;
    noOfGear: number;
    engineNumber: string;
    engineSize: number;
    userId?: number;
}