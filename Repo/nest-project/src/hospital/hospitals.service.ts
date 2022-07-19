import { Injectable } from '@nestjs/common';

import { Hospital } from './hospitals.model';

@Injectable()
export class HospitalsService {
  private Patients: Hospital[] = [];

  insertPatientDetails(patientName: string, patientNumber: number, patientBill: number) {
    const patientId = Math.random().toString();
    const newPatient = new Hospital(patientId, patientName, patientNumber, patientBill);
    this.Patients.push(newPatient);
    return patientId;
  }

  getPatients() {
    return [...this.Patients];
  }
}