"use client";

import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { CheckboxField, Field, PhoneInput, SelectInput, TextArea, TextInput } from "./FormFields";
import { DistributorFormLabels } from "./types";

interface FormValues {
  applicantType: string;
  name: string;
  business: string;
  phone: string;
  email: string;
  message: string;
  privacyConsent: boolean;
  smsConsent: boolean;
}

type FormErrors = Partial<Record<"applicantType" | "email" | "phone" | "privacyConsent", string>>;

const INITIAL_VALUES: FormValues = {
  applicantType: "",
  name: "",
  business: "",
  phone: "",
  email: "",
  message: "",
  privacyConsent: false,
  smsConsent: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+()\-.\s]{8,20}$/;

const validate = (values: FormValues, labels: DistributorFormLabels): FormErrors => {
  const errors: FormErrors = {};
  if (!values.applicantType) errors.applicantType = labels.typeRequiredError;
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = labels.emailInvalidError;
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) errors.phone = labels.phoneInvalidError;
  if (!values.privacyConsent) errors.privacyConsent = labels.consentRequiredError;
  return errors;
};

// "0912 345 678" typed after the "+84" prefix becomes "+84 912 345 678".
const formatPhone = (phone: string, prefix: string) => {
  const trimmed = phone.trim().replace(/^0/, "");
  return trimmed ? `${prefix} ${trimmed}` : "";
};

const SHADOW =
  "shadow-[0px_-35px_77px_0px_rgba(60,62,62,0.03),0px_-140px_140px_0px_rgba(60,62,62,0.03),0px_-314px_188px_0px_rgba(60,62,62,0.02)]";

export const DistributorForm: React.FC<{ labels: DistributorFormLabels }> = ({ labels }) => {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (key in errors) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values, labels);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/distributor-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantType: values.applicantType,
          name: values.name,
          business: values.business,
          phone: formatPhone(values.phone, labels.phonePrefix),
          email: values.email,
          message: values.message,
        }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      toast.success(labels.successMessage);
      setValues(INITIAL_VALUES);
      setErrors({});
    } catch {
      toast.error(labels.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={`flex flex-col gap-8 rounded-2xl bg-white px-5 py-10 md:px-12 md:py-14 lg:px-[116px] lg:py-20 ${SHADOW}`}
    >
      <div className="flex flex-col gap-5">
        <Field id="applicant-type" label={labels.typeLabel} required error={errors.applicantType}>
          <SelectInput
            id="applicant-type"
            value={values.applicantType}
            placeholder={labels.typePlaceholder}
            options={labels.typeOptions}
            hasError={Boolean(errors.applicantType)}
            onChange={(event) => setField("applicantType", event.target.value)}
          />
        </Field>

        <div className="grid gap-5 md:grid-cols-2 md:gap-4">
          <Field id="distributor-name" label={labels.nameLabel}>
            <TextInput
              id="distributor-name"
              value={values.name}
              placeholder={labels.namePlaceholder}
              autoComplete="name"
              onChange={(event) => setField("name", event.target.value)}
            />
          </Field>
          <Field id="distributor-business" label={labels.businessLabel}>
            <TextInput
              id="distributor-business"
              value={values.business}
              placeholder={labels.businessPlaceholder}
              autoComplete="organization"
              onChange={(event) => setField("business", event.target.value)}
            />
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-4">
          <Field
            id="distributor-phone"
            label={labels.phoneLabel}
            optionalNote={labels.optionalNote}
            error={errors.phone}
          >
            <PhoneInput
              id="distributor-phone"
              prefix={labels.phonePrefix}
              value={values.phone}
              placeholder={labels.phonePlaceholder}
              autoComplete="tel-national"
              hasError={Boolean(errors.phone)}
              onChange={(event) => setField("phone", event.target.value)}
            />
          </Field>
          <Field id="distributor-email" label={labels.emailLabel} required error={errors.email}>
            <TextInput
              id="distributor-email"
              type="email"
              value={values.email}
              placeholder={labels.emailPlaceholder}
              autoComplete="email"
              hasError={Boolean(errors.email)}
              onChange={(event) => setField("email", event.target.value)}
            />
          </Field>
        </div>

        <Field id="distributor-message" label={labels.messageLabel} optionalNote={labels.optionalNote}>
          <TextArea
            id="distributor-message"
            rows={4}
            value={values.message}
            placeholder={labels.messagePlaceholder}
            onChange={(event) => setField("message", event.target.value)}
          />
        </Field>

        <div className="flex flex-col gap-5 pt-5">
          <CheckboxField
            id="distributor-privacy"
            checked={values.privacyConsent}
            error={errors.privacyConsent}
            onChange={(checked) => setField("privacyConsent", checked)}
          >
            {labels.privacyConsent.map((segment, index) =>
              segment.href ? (
                <a key={index} href={segment.href} className="text-brand-text hover:underline">
                  {segment.text}
                </a>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </CheckboxField>
          <CheckboxField
            id="distributor-sms"
            checked={values.smsConsent}
            onChange={(checked) => setField("smsConsent", checked)}
          >
            {labels.smsConsent}
          </CheckboxField>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-text font-[Arial,Helvetica,sans-serif] text-base tracking-[0.16px] text-white transition-colors hover:bg-brand disabled:cursor-wait disabled:opacity-70"
      >
        <Image src="/logos/email.svg" alt="" width={24} height={24} draggable={false} />
        {isSubmitting ? labels.submittingLabel : labels.submitLabel}
      </button>
    </form>
  );
};
