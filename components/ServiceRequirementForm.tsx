import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, User, Wrench, MapPin, X, CheckCircle2, 
  AlertCircle, Loader2, ClipboardCheck, Phone, Calendar, ShieldCheck
} from 'lucide-react';

// --- Constants ---

const ORGANIZATION_TYPES = [
  "Oil Marketing Company (OMC)",
  "Oil & Gas Industry",
  "Industrial Client",
  "Infrastructure / EPC",
  "Petrol Pump / Retail Outlet",
  "PSU / Government",
  "Private Enterprise",
  "Other"
];

const SERVICE_OPTIONS = [
  "HSD / MS / Oil Tank Cleaning (UG / AG)",
  "Mechanical Works",
  "Electrical Works",
  "Pipeline Installation (Hydrant / HSD / Gas)",
  "Gantry Crane Calibration",
  "Underground Tank Evacuation",
  "O&M for Petrol Stations",
  "Gantry & Distribution Unit Maintenance",
  "RO / STP / HSD Plant Installation",
  "Tender / EPC Execution",
  "Other"
];

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi/NCR", "Jammu & Kashmir", 
  "Ladakh", "Puducherry"
];

// --- Types ---

interface FormData {
  companyName: string;
  orgType: string;
  gstNumber: string;
  contactName: string;
  designation: string;
  email: string;
  mobile: string;
  services: string[];
  locations: string;
  states: string[];
  startDate: string;
  hsseRequired: 'Yes' | 'No' | '';
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const ServiceRequirementForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    orgType: '',
    gstNumber: '',
    contactName: '',
    designation: '',
    email: '',
    mobile: '',
    services: [],
    locations: '',
    states: [],
    startDate: '',
    hsseRequired: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionData, setSubmissionData] = useState<{ id: string; timestamp: string } | null>(null);
  
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => {
      const current = prev.services;
      const updated = current.includes(service)
        ? current.filter(s => s !== service)
        : [...current, service];
      return { ...prev, services: updated };
    });
    if (errors.services) setErrors(prev => ({ ...prev, services: '' }));
  };

  const handleStateSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected && !formData.states.includes(selected)) {
      setFormData(prev => ({ ...prev, states: [...prev.states, selected] }));
      if (errors.states) setErrors(prev => ({ ...prev, states: '' }));
    }
    e.target.value = "";
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    
    if (!formData.companyName.trim()) newErrors.companyName = "Entity name is required";
    if (!formData.orgType) newErrors.orgType = "Organization type is required";
    if (formData.gstNumber && !gstRegex.test(formData.gstNumber.toUpperCase())) {
      newErrors.gstNumber = "Invalid GST format";
    }
    if (!formData.contactName.trim()) newErrors.contactName = "Full name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid work email required";
    }
    if (formData.services.length === 0) newErrors.services = "Select at least one service";
    if (formData.states.length === 0) newErrors.states = "Select at least one operational state";
    if (!formData.consent) newErrors.consent = "Mandatory confirmation required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const referenceId = `PL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const timestamp = new Date().toLocaleString();
    
    setSubmissionData({ id: referenceId, timestamp });
    setIsSubmitting(false);
  };

  const InputWrapper = ({ label, error, required = false, children }: any) => (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-black text-industrial-muted uppercase tracking-widest flex justify-between">
        <span>{label} {required && <span className="text-industrial-primary">*</span>}</span>
      </label>
      {children}
      {error && <span className="text-[10px] text-red-500 flex items-center gap-1 font-bold"><AlertCircle size={10} /> {error}</span>}
    </div>
  );

  if (submissionData) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-lg overflow-hidden"
      >
        <div className="bg-industrial-primary p-8 text-white flex flex-col items-center">
          <CheckCircle2 size={64} className="mb-4" />
          <h3 className="text-2xl font-bold uppercase tracking-tight">Technical Brief Submitted</h3>
          <p className="opacity-80 text-sm mt-2">Ref: {submissionData.id}</p>
        </div>
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <span className="text-xs font-bold text-industrial-muted uppercase tracking-widest block mb-1">Company</span>
              <p className="font-bold text-industrial-text">{formData.companyName}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-industrial-muted uppercase tracking-widest block mb-1">Contact</span>
              <p className="font-bold text-industrial-text">{formData.contactName}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-industrial-muted uppercase tracking-widest block mb-1">Services</span>
              <p className="text-industrial-muted text-xs">{formData.services.join(", ")}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-industrial-muted uppercase tracking-widest block mb-1">Submitted At</span>
              <p className="font-mono text-industrial-text">{submissionData.timestamp}</p>
            </div>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full py-4 bg-industrial-text text-white font-bold uppercase tracking-widest hover:bg-industrial-primary transition-all text-sm rounded"
          >
            Submit Another Project
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto relative z-30">
      <div className="bg-white border border-slate-200 shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-industrial-text text-white p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Service Requirement Portal</h2>
          <p className="text-slate-400 text-sm font-light">
            Formal technical intake for petroleum infrastructure services.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">
          {/* Section: Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Building2 size={18} className="text-industrial-primary" />
              <h3 className="font-bold text-industrial-text uppercase tracking-widest text-sm">Entity Details</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <InputWrapper label="Company Name" required error={errors.companyName}>
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:border-industrial-primary outline-none" />
              </InputWrapper>
              <InputWrapper label="Org Type" required error={errors.orgType}>
                <select name="orgType" value={formData.orgType} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded outline-none">
                  <option value="">Select Category</option>
                  {ORGANIZATION_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </InputWrapper>
              <InputWrapper label="GSTIN" error={errors.gstNumber}>
                <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded uppercase" maxLength={15} />
              </InputWrapper>
            </div>
          </div>

          {/* Section: Contact */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <User size={18} className="text-industrial-primary" />
              <h3 className="font-bold text-industrial-text uppercase tracking-widest text-sm">Contact Person</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <InputWrapper label="Full Name" required error={errors.contactName}>
                <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded" />
              </InputWrapper>
              <InputWrapper label="Designation">
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded" />
              </InputWrapper>
              <InputWrapper label="Official Email" required error={errors.email}>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded" />
              </InputWrapper>
              <InputWrapper label="Mobile Number" required error={errors.mobile}>
                <div className="flex">
                  <span className="px-3 py-3 bg-slate-200 border border-r-0 border-slate-200 rounded-l text-xs font-bold">+91</span>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-r flex-grow" />
                </div>
              </InputWrapper>
            </div>
          </div>

          {/* Section: Scope */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Wrench size={18} className="text-industrial-primary" />
              <h3 className="font-bold text-industrial-text uppercase tracking-widest text-sm">Project Scope</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-slate-50 border border-slate-200 rounded">
              {SERVICE_OPTIONS.map(service => (
                <label key={service} className="flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-white group transition-all">
                  <div className={`w-4 h-4 border rounded flex items-center justify-center ${formData.services.includes(service) ? 'bg-industrial-primary border-industrial-primary' : 'border-slate-300'}`}>
                    {formData.services.includes(service) && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                  <input type="checkbox" className="hidden" checked={formData.services.includes(service)} onChange={() => handleCheckboxChange(service)} />
                  <span className="text-xs font-medium text-industrial-text group-hover:text-industrial-primary">{service}</span>
                </label>
              ))}
            </div>
            {errors.services && <span className="text-[10px] text-red-500 font-bold flex items-center gap-1"><AlertCircle size={10} /> {errors.services}</span>}
          </div>

          {/* Section: Logistics & Temporal */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-industrial-primary" />
                  <h3 className="font-bold text-industrial-text uppercase tracking-widest text-sm">Logistics</h3>
                </div>
                <InputWrapper label="Operational States" required error={errors.states}>
                  <select onChange={handleStateSelect} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded w-full">
                    <option value="">+ Add State</option>
                    {INDIAN_STATES.map(s => <option key={s} value={s} disabled={formData.states.includes(s)}>{s}</option>)}
                  </select>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.states.map(s => (
                      <span key={s} className="px-2 py-1 bg-industrial-primary/10 text-industrial-primary text-[10px] font-bold uppercase rounded flex items-center gap-1 border border-industrial-primary/20">
                        {s} <button onClick={() => setFormData(p => ({ ...p, states: p.states.filter(x => x !== s) }))}><X size={10}/></button>
                      </span>
                    ))}
                  </div>
                </InputWrapper>
                <InputWrapper label="Site Specific Locations">
                  <input type="text" name="locations" value={formData.locations} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded w-full" placeholder="e.g. refineries, pump networks" />
                </InputWrapper>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-industrial-primary" />
                  <h3 className="font-bold text-industrial-text uppercase tracking-widest text-sm">Timeline & Training</h3>
                </div>
                <InputWrapper label="Est. Project Start Date">
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} min={today} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded w-full" />
                </InputWrapper>
                <InputWrapper label="HSSE Site Training Required?">
                  <select name="hsseRequired" value={formData.hsseRequired} onChange={handleChange} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded w-full">
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </InputWrapper>
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="pt-8 border-t border-slate-100">
             <label className="flex items-start gap-4 cursor-pointer">
                <div className={`mt-1 w-5 h-5 border rounded flex items-center justify-center transition-all ${formData.consent ? 'bg-industrial-primary border-industrial-primary' : 'border-slate-300'}`}>
                  {formData.consent && <CheckCircle2 size={12} className="text-white" />}
                </div>
                <input type="checkbox" className="hidden" checked={formData.consent} onChange={() => setFormData(p => ({ ...p, consent: !p.consent }))} />
                <span className={`text-[11px] leading-relaxed ${errors.consent ? 'text-red-500' : 'text-industrial-muted'}`}>
                  I confirm that the technical requirements provided are accurate and authorize Perfect Logistics to use this data for feasibility analysis.
                </span>
             </label>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-5 bg-industrial-text text-white font-bold uppercase tracking-widest hover:bg-industrial-primary transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <ClipboardCheck size={18} />}
            {isSubmitting ? "Persisting Brief..." : "Initiate Technical Review"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequirementForm;