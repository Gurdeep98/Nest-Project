import {
    Controller,
    Post,
    Body,
    Get,
  } from '@nestjs/common';
  
  import { HospitalsService } from './hospitals.service';
  
  @Controller('hospitals')
  export class HospitalsController {
    constructor(private readonly HospitalsService: HospitalsService) {}
  
    @Post()
    addPatient(
      @Body('patientName') patientName: string,
      @Body('patientNumber') patientNumber: number,
      @Body('patientBill') patientBill: number,
    ) {
      const generatedId = this.HospitalsService.insertPatientDetails(
        patientName,
        patientNumber,
        patientBill,
      );
      return { patientId: generatedId };
    }
  
    @Get()
    getAllPatients() {
      return this.HospitalsService.getPatients();
    }
  }