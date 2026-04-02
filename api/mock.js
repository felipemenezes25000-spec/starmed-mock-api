const now = new Date().toISOString();
const yesterday = new Date(Date.now() - 86400000).toISOString();
const twoDaysAgo = new Date(Date.now() - 86400000 * 2).toISOString();
const fiveDaysAgo = new Date(Date.now() - 86400000 * 5).toISOString();
const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
const twoHoursAgo = new Date(Date.now() - 7200000).toISOString();
const twelveHoursAgo = new Date(Date.now() - 43200000).toISOString();

const MOCK = {
  // ─── Dashboard ───
  'dashboard/stats': {
    totalPatients: 1247,
    totalPatientsChange: 3.2,
    totalAppointments: 89,
    totalEncounters: 34,
    encountersToday: 34,
    encountersTodayChange: 12.5,
    occupancyRate: 72.5,
    occupiedBeds: 29,
    totalBeds: 40,
    activeAlerts: 5,
    criticalAlerts: 3,
    completedAppointments: 67,
    scheduledAppointments: 89,
    pendingPrescriptions: 12,
    waitingTriage: 4,
    averageWaitTime: 18,
    revenueThisMonth: 187500,
    todayAdmissions: 12,
    todayDischarges: 8,
  },

  // ─── Notifications ───
  'notifications/me': {
    data: [
      { id: '1', title: 'Resultado de exame disponível', message: 'Hemograma completo do paciente Maria Silva está pronto.', type: 'INFO', read: false, createdAt: now },
      { id: '2', title: 'Alerta de medicação', message: 'Prescrição de João Santos expira em 2 horas.', type: 'WARNING', read: false, createdAt: oneHourAgo },
      { id: '3', title: 'Nova internação', message: 'Paciente Ana Oliveira admitida no leito 204-B.', type: 'INFO', read: true, createdAt: twoHoursAgo },
    ],
    total: 3, page: 1, pageSize: 10, totalPages: 1,
  },
  'notifications/me/unread-count': { unreadCount: 2 },

  // ─── Alerts ───
  alerts: {
    data: [
      { id: '1', type: 'CRITICAL', message: 'Paciente UTI-03 — SpO2 abaixo de 90%', isActive: true, triggeredAt: now, createdAt: now },
      { id: '2', type: 'WARNING', message: 'Estoque de Dipirona abaixo do mínimo', isActive: true, triggeredAt: now, createdAt: now },
    ],
    total: 2, page: 1, pageSize: 20, totalPages: 1,
  },

  // ─── Appointments (matches Appointment interface) ───
  appointments: {
    data: [
      { id: '1', patientId: 'p1', patient: { id: 'p1', fullName: 'Maria Silva', name: 'Maria Silva' }, doctorId: 'demo-1', doctor: { id: 'demo-1', name: 'Dr. Demo Starmed' }, scheduledAt: new Date(new Date().setHours(9, 0, 0, 0)).toISOString(), duration: 30, status: 'CONFIRMED', type: 'FIRST_VISIT', location: 'Consultório 1', room: 'Sala 101', isTelemedicine: false, createdAt: now, updatedAt: now },
      { id: '2', patientId: 'p2', patient: { id: 'p2', fullName: 'João Santos', name: 'João Santos' }, doctorId: 'demo-1', doctor: { id: 'demo-1', name: 'Dr. Demo Starmed' }, scheduledAt: new Date(new Date().setHours(10, 30, 0, 0)).toISOString(), duration: 30, status: 'WAITING', type: 'FOLLOW_UP', location: 'Consultório 1', room: 'Sala 101', isTelemedicine: false, createdAt: now, updatedAt: now },
      { id: '3', patientId: 'p3', patient: { id: 'p3', fullName: 'Ana Oliveira', name: 'Ana Oliveira' }, doctorId: 'demo-1', doctor: { id: 'demo-1', name: 'Dr. Demo Starmed' }, scheduledAt: new Date(new Date().setHours(14, 0, 0, 0)).toISOString(), duration: 45, status: 'SCHEDULED', type: 'RETURN', location: 'Consultório 2', room: 'Sala 201', isTelemedicine: false, createdAt: now, updatedAt: now },
      { id: '4', patientId: 'p4', patient: { id: 'p4', fullName: 'Carlos Pereira', name: 'Carlos Pereira' }, doctorId: '2', doctor: { id: '2', name: 'Dra. Laura Mendes' }, scheduledAt: new Date(new Date().setHours(15, 30, 0, 0)).toISOString(), duration: 60, status: 'CONFIRMED', type: 'EXAM', location: 'Cardiologia', room: 'Sala 305', isTelemedicine: false, createdAt: now, updatedAt: now },
    ],
    total: 4, page: 1, limit: 20, totalPages: 1,
  },

  // ─── Users ───
  users: {
    data: [
      { id: 'demo-1', name: 'Dr. Demo Starmed', email: 'demo@starmed.dev', role: 'DOCTOR', specialty: 'Clínica Geral' },
      { id: '2', name: 'Dra. Laura Mendes', email: 'laura@starmed.dev', role: 'DOCTOR', specialty: 'Cardiologia' },
      { id: '3', name: 'Enf. Beatriz Costa', email: 'beatriz@starmed.dev', role: 'NURSE', specialty: 'Enfermagem' },
    ],
    total: 3, page: 1, limit: 20, totalPages: 1,
  },

  // ─── Patients (matches Patient interface) ───
  patients: {
    data: [
      { id: 'p1', mrn: 'MRN-00001', fullName: 'Maria Silva', name: 'Maria Silva', cpf: '***.***.***-01', birthDate: '1985-03-15', gender: 'FEMALE', phone: '(11) 99999-0001', bloodType: 'A+', isActive: true, tags: ['Hipertensão'], riskScore: 2, lastVisitAt: yesterday, totalVisits: 12, allergies: [{ id: 'a1', substance: 'Penicilina', severity: 'HIGH' }], chronicConditions: [], createdAt: now, updatedAt: now },
      { id: 'p2', mrn: 'MRN-00002', fullName: 'João Santos', name: 'João Santos', cpf: '***.***.***-02', birthDate: '1972-08-22', gender: 'MALE', phone: '(11) 99999-0002', bloodType: 'O+', isActive: true, tags: ['Diabetes'], riskScore: 3, lastVisitAt: now, totalVisits: 8, allergies: [], chronicConditions: [{ id: 'c1', name: 'Diabetes Tipo 2' }], createdAt: now, updatedAt: now },
      { id: 'p3', mrn: 'MRN-00003', fullName: 'Ana Oliveira', name: 'Ana Oliveira', cpf: '***.***.***-03', birthDate: '1990-11-08', gender: 'FEMALE', phone: '(11) 99999-0003', bloodType: 'B-', isActive: true, tags: ['Internada'], riskScore: 4, lastVisitAt: now, totalVisits: 3, allergies: [{ id: 'a2', substance: 'Dipirona', severity: 'MODERATE' }], chronicConditions: [], createdAt: now, updatedAt: now },
      { id: 'p4', mrn: 'MRN-00004', fullName: 'Carlos Pereira', name: 'Carlos Pereira', cpf: '***.***.***-04', birthDate: '1968-01-30', gender: 'MALE', phone: '(11) 99999-0004', bloodType: 'AB+', isActive: true, tags: ['Cardiopata', 'Hipertensão'], riskScore: 5, lastVisitAt: twoDaysAgo, totalVisits: 22, allergies: [], chronicConditions: [{ id: 'c2', name: 'Hipertensão Arterial' }, { id: 'c3', name: 'ICC' }], createdAt: now, updatedAt: now },
      { id: 'p5', mrn: 'MRN-00005', fullName: 'Fernanda Lima', name: 'Fernanda Lima', cpf: '***.***.***-05', birthDate: '1995-06-12', gender: 'FEMALE', phone: '(11) 99999-0005', bloodType: 'O-', isActive: true, tags: [], riskScore: 1, lastVisitAt: fiveDaysAgo, totalVisits: 2, allergies: [], chronicConditions: [], createdAt: now, updatedAt: now },
    ],
    total: 5, page: 1, limit: 20, totalPages: 1,
  },

  // ─── Encounters (matches Encounter interface) ───
  encounters: {
    data: [
      { id: 'e1', patientId: 'p3', patient: { id: 'p3', fullName: 'Ana Oliveira', name: 'Ana Oliveira' }, primaryDoctorId: 'demo-1', primaryDoctor: { id: 'demo-1', name: 'Dr. Demo Starmed' }, type: 'HOSPITALIZATION', status: 'IN_PROGRESS', priority: 'NORMAL', startedAt: twoDaysAgo, location: 'Clínica Médica', room: '204-B', createdAt: twoDaysAgo, updatedAt: now },
      { id: 'e2', patientId: 'p6', patient: { id: 'p6', fullName: 'Roberto Alves', name: 'Roberto Alves' }, primaryDoctorId: '2', primaryDoctor: { id: '2', name: 'Dra. Laura Mendes' }, type: 'HOSPITALIZATION', status: 'IN_PROGRESS', priority: 'HIGH', startedAt: fiveDaysAgo, location: 'UTI', room: 'UTI-03', createdAt: fiveDaysAgo, updatedAt: now },
      { id: 'e3', patientId: 'p7', patient: { id: 'p7', fullName: 'Lucia Ferreira', name: 'Lucia Ferreira' }, primaryDoctorId: 'demo-1', primaryDoctor: { id: 'demo-1', name: 'Dr. Demo Starmed' }, type: 'EMERGENCY', status: 'IN_PROGRESS', priority: 'URGENT', startedAt: now, location: 'Emergência', room: '108-A', createdAt: now, updatedAt: now },
    ],
    total: 3, page: 1, limit: 15, totalPages: 1,
  },

  // ─── Beds (matches Bed interface) ───
  'admissions/beds/all': {
    data: [
      { id: 'b1', bedNumber: '101-A', ward: 'Clínica Médica', room: 'Enf. 101', floor: '1', status: 'AVAILABLE', type: 'STANDARD', createdAt: now, updatedAt: now },
      { id: 'b2', bedNumber: '101-B', ward: 'Clínica Médica', room: 'Enf. 101', floor: '1', status: 'OCCUPIED', type: 'STANDARD', currentPatientId: 'p4', currentPatient: { id: 'p4', fullName: 'Carlos Pereira' }, createdAt: now, updatedAt: now },
      { id: 'b3', bedNumber: '204-B', ward: 'Clínica Médica', room: 'Enf. 204', floor: '2', status: 'OCCUPIED', type: 'STANDARD', currentPatientId: 'p3', currentPatient: { id: 'p3', fullName: 'Ana Oliveira' }, createdAt: now, updatedAt: now },
      { id: 'b4', bedNumber: 'UTI-01', ward: 'UTI', room: 'UTI', floor: '3', status: 'AVAILABLE', type: 'ICU', createdAt: now, updatedAt: now },
      { id: 'b5', bedNumber: 'UTI-02', ward: 'UTI', room: 'UTI', floor: '3', status: 'MAINTENANCE', type: 'ICU', createdAt: now, updatedAt: now },
      { id: 'b6', bedNumber: 'UTI-03', ward: 'UTI', room: 'UTI', floor: '3', status: 'OCCUPIED', type: 'ICU', currentPatientId: 'p6', currentPatient: { id: 'p6', fullName: 'Roberto Alves' }, createdAt: now, updatedAt: now },
      { id: 'b7', bedNumber: '108-A', ward: 'Emergência', room: 'Obs. 108', floor: '1', status: 'OCCUPIED', type: 'OBSERVATION', currentPatientId: 'p7', currentPatient: { id: 'p7', fullName: 'Lucia Ferreira' }, createdAt: now, updatedAt: now },
      { id: 'b8', bedNumber: '302-A', ward: 'Cirúrgica', room: 'Enf. 302', floor: '3', status: 'AVAILABLE', type: 'STANDARD', createdAt: now, updatedAt: now },
    ],
    total: 8,
  },

  // ─── Pharmacy ───
  'pharmacy/pending-dispensation': {
    data: [
      { id: 'rx1', patientId: 'p3', patient: { id: 'p3', fullName: 'Ana Oliveira' }, encounterId: 'e1', medication: 'Dipirona 500mg', dosage: '1 comp 6/6h', status: 'PENDING', prescribedBy: 'Dr. Demo Starmed', prescribedAt: now, items: [{ id: 'i1', medication: 'Dipirona 500mg', dosage: '1 comp 6/6h', quantity: 4, dispensations: [] }] },
      { id: 'rx2', patientId: 'p6', patient: { id: 'p6', fullName: 'Roberto Alves' }, encounterId: 'e2', medication: 'Omeprazol 20mg', dosage: '1 comp 12/12h', status: 'PENDING', prescribedBy: 'Dra. Laura Mendes', prescribedAt: now, items: [{ id: 'i2', medication: 'Omeprazol 20mg', dosage: '1 comp 12/12h', quantity: 2, dispensations: [] }] },
    ],
    total: 2, page: 1, limit: 20, totalPages: 1,
  },

  // ─── Exams (matches ExamResult interface) ───
  exams: {
    data: [
      { id: 'ex1', patientId: 'p1', patient: { id: 'p1', fullName: 'Maria Silva' }, examName: 'Hemograma Completo', examType: 'LABORATORY', status: 'COMPLETED', requestedById: 'demo-1', requestedAt: yesterday, completedAt: now, createdAt: yesterday, updatedAt: now },
      { id: 'ex2', patientId: 'p2', patient: { id: 'p2', fullName: 'João Santos' }, examName: 'Glicemia de Jejum', examType: 'LABORATORY', status: 'PENDING', requestedById: 'demo-1', requestedAt: now, createdAt: now, updatedAt: now },
      { id: 'ex3', patientId: 'p3', patient: { id: 'p3', fullName: 'Ana Oliveira' }, examName: 'Raio-X Tórax', examType: 'IMAGING', status: 'IN_PROGRESS', requestedById: 'demo-1', requestedAt: now, imageModality: 'XRAY', createdAt: now, updatedAt: now },
    ],
    total: 3, page: 1, limit: 20, totalPages: 1,
  },

  // ─── Nursing handoff ───
  'nursing/handoff/history': {
    data: [
      { id: 'h1', fromNurse: 'Enf. Beatriz Costa', toNurse: 'Enf. Marcos Paulo', shift: 'DIURNO→NOTURNO', patientsCount: 8, createdAt: twelveHoursAgo, notes: 'Paciente UTI-03 necessita monitoramento contínuo de SpO2.' },
    ],
    total: 1, page: 1, limit: 20, totalPages: 1,
  },

  // ─── Chemotherapy ───
  'chemotherapy/protocols': { data: [], total: 0, page: 1, pageSize: 20, totalPages: 0 },

  // ─── Population Health ───
  'population-health/conditions-summary': {
    data: [
      { conditionCode: 'I10', conditionLabel: 'Hipertensão', name: 'Hipertensão', patientCount: 342, count: 342, percentage: 27.4 },
      { conditionCode: 'E11', conditionLabel: 'Diabetes Tipo 2', name: 'Diabetes Tipo 2', patientCount: 198, count: 198, percentage: 15.9 },
      { conditionCode: 'J45', conditionLabel: 'Asma', name: 'Asma', patientCount: 87, count: 87, percentage: 7.0 },
      { conditionCode: 'J44', conditionLabel: 'DPOC', name: 'DPOC', patientCount: 54, count: 54, percentage: 4.3 },
    ],
    conditions: [
      { name: 'Hipertensão', count: 342, percentage: 27.4 },
      { name: 'Diabetes Tipo 2', count: 198, percentage: 15.9 },
      { name: 'Asma', count: 87, percentage: 7.0 },
      { name: 'DPOC', count: 54, percentage: 4.3 },
    ],
    totalPatients: 1247,
    total: 4,
  },
  'population-health/risk-stratification': {
    low: 687, medium: 398, high: 132, critical: 30, total: 1247,
  },
  'population-health/care-gaps': { data: [], total: 0 },
  'population-health/dashboard': {
    totalPatients: 1247, activePrograms: 4, avgRiskScore: 2.3, complianceRate: 78.5,
  },

  // ─── Infection Control ───
  'infection-control/positive-cultures': { data: [], total: 0, page: 1, limit: 20, totalPages: 0 },
  'infection-control/notifications': { data: [], total: 0, page: 1, limit: 20, totalPages: 0 },
  'infection-control/isolation-patients': { data: [], total: 0, page: 1, limit: 20, totalPages: 0 },
  'infection-control/notifiable-diseases': { data: [], total: 0, page: 1, limit: 20, totalPages: 0 },
  'infection-control/dashboard': {
    activeCases: 2, isolationPatients: 1, pendingCultures: 3, infectionRate: 1.2,
  },

  // ─── Patient Portal ───
  'patient-portal/my-appointments': { data: [], total: 0, page: 1, limit: 20, totalPages: 0 },

  // ─── Reports ───
  'reports/hospital-movement': {
    admissions: 12, discharges: 8, transfers: 3, deaths: 0, occupancyRate: 72.5,
    byDepartment: [
      { department: 'Clínica Médica', admissions: 5, discharges: 3 },
      { department: 'UTI', admissions: 2, discharges: 1 },
      { department: 'Emergência', admissions: 5, discharges: 4 },
    ],
  },

  // ─── Billing ───
  billing: {
    data: [
      { id: 'bl1', patientId: 'p1', patient: { id: 'p1', fullName: 'Maria Silva' }, encounterId: 'e1', type: 'CONSULTA', amount: 250.00, status: 'PAID', date: now, createdAt: now, updatedAt: now },
      { id: 'bl2', patientId: 'p2', patient: { id: 'p2', fullName: 'João Santos' }, encounterId: 'e2', type: 'EXAME', amount: 180.00, status: 'PENDING', date: now, createdAt: now, updatedAt: now },
    ],
    total: 2, page: 1, limit: 10, totalPages: 1,
  },
  'billing/dashboard': {
    totalRevenue: 187500.00, pendingBills: 23400.00, paidThisMonth: 164100.00, averageTicket: 312.50,
  },

  // ─── Auth ───
  'auth/me': {
    id: 'demo-1', name: 'Dr. Demo Starmed', email: 'demo@starmed.dev', role: 'DOCTOR', specialty: 'Clínica Geral', tenantId: 'demo-tenant',
  },
};

export default function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.status(200).end();
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json');

  // Extract the path after /api/v1/
  const url = req.url || '';
  const match = url.match(/\/api\/v1\/(.+?)(\?|$)/);
  const path = match ? match[1] : '';

  // For POST/PUT/PATCH/DELETE, return success with the sent body
  if (req.method !== 'GET') {
    return res.status(200).json({ success: true, message: 'OK' });
  }

  // Try exact match first, then partial matches
  let data = MOCK[path];

  if (!data) {
    // Try matching the beginning of the path
    for (const key of Object.keys(MOCK)) {
      if (path.startsWith(key)) {
        data = MOCK[key];
        break;
      }
    }
  }

  if (data) {
    return res.status(200).json(data);
  }

  // Default: return empty success response
  return res.status(200).json({ data: [], total: 0, page: 1, limit: 20, totalPages: 0 });
}
