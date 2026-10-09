export type Language = 'en' | 'ar';

export interface Doctor {
  id: string;
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  specialtyId: string;
  specialtyEn: string;
  specialtyAr: string;
  image: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  consultationFee: number; // in USD or EGP
  bioEn: string;
  bioAr: string;
  educationEn: string[];
  educationAr: string[];
  certificationsEn: string[];
  certificationsAr: string[];
  availableDaysEn: string[];
  availableDaysAr: string[];
  timeSlots: string[];
  languages: string[];
}

export interface Specialty {
  id: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
  commonConditionsEn: string[];
  commonConditionsAr: string[];
  doctorCount: number;
}

export interface Facility {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  featuresEn: string[];
  featuresAr: string[];
}

export type VisitType = 'in_person' | 'telehealth' | 'follow_up';

export interface Appointment {
  id: string;
  referenceCode: string;
  doctorId: string;
  doctorNameEn: string;
  doctorNameAr: string;
  specialtyEn: string;
  specialtyAr: string;
  doctorImage: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  nationalId?: string;
  date: string;
  timeSlot: string;
  visitType: VisitType;
  consultationFee: number;
  notes?: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface ClinicStat {
  value: string;
  labelEn: string;
  labelAr: string;
  subEn: string;
  subAr: string;
}
