import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const LABEL_TEXT = "font-[Arial,Helvetica,sans-serif] text-base leading-[25.6px] tracking-[0.16px] text-ink-dark";
const FIELD_BASE =
  "w-full rounded-lg border bg-white px-6 py-5 font-[Arial,Helvetica,sans-serif] text-base tracking-[0.16px] text-ink-dark outline-none transition-colors placeholder:text-ink-placeholder focus:border-brand";

const fieldBorder = (hasError: boolean) => (hasError ? "border-[#E72222]" : "border-ink-line");

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  optionalNote?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({
  id,
  label,
  required,
  optionalNote,
  error,
  className,
  children,
}) => (
  <div className={cn("flex min-w-0 flex-col", className)}>
    <label htmlFor={id} className={cn(LABEL_TEXT, "flex items-center gap-1")}>
      <span>
        {label}
        {required && <span className="text-[#E72222]"> *</span>}
      </span>
      {optionalNote && <span className="text-[13.6px] leading-[22.4px] text-ink-hint">{optionalNote}</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="pt-1 font-google-sans text-sm leading-[1.6] text-[#E72222]">
        {error}
      </p>
    )}
  </div>
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean };

export const TextInput: React.FC<InputProps> = ({ hasError = false, className, ...props }) => (
  <input
    {...props}
    aria-invalid={hasError || undefined}
    aria-describedby={hasError ? `${props.id}-error` : undefined}
    className={cn(FIELD_BASE, fieldBorder(hasError), className)}
  />
);

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  options: { value: string; label: string }[];
  hasError?: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  placeholder,
  options,
  hasError = false,
  className,
  ...props
}) => (
  <div className="relative">
    <select
      {...props}
      aria-invalid={hasError || undefined}
      aria-describedby={hasError ? `${props.id}-error` : undefined}
      className={cn(
        FIELD_BASE,
        fieldBorder(hasError),
        "cursor-pointer appearance-none pr-14",
        props.value === "" && "text-ink-placeholder",
        className,
      )}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-ink-dark">
          {option.label}
        </option>
      ))}
    </select>
    <Image
      src="/logos/select-chevron.svg"
      alt=""
      width={24}
      height={24}
      draggable={false}
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
    />
  </div>
);

export const PhoneInput: React.FC<InputProps & { prefix: string }> = ({
  prefix,
  hasError = false,
  className,
  ...props
}) => (
  <div className="relative">
    <span className="absolute inset-y-px left-px flex items-center rounded-l-[7px] bg-black/5 pl-3 pr-3 font-[Arial,Helvetica,sans-serif] text-base text-[#374151]">
      {prefix}
    </span>
    <TextInput {...props} hasError={hasError} type="tel" className={cn("pl-[68px]", className)} />
  </div>
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => (
  <textarea
    {...props}
    className={cn(FIELD_BASE, fieldBorder(false), "min-h-[104px] resize-y", className)}
  />
);

interface CheckboxFieldProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  children: React.ReactNode;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  checked,
  onChange,
  error,
  children,
}) => (
  <div>
    <div className="relative pl-8">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        aria-invalid={Boolean(error) || undefined}
        className="peer absolute left-0 top-[2px] size-6 cursor-pointer opacity-0"
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-[2px] size-6 rounded border bg-white transition-colors peer-checked:border-brand-text peer-checked:bg-brand-text peer-focus-visible:ring-2 peer-focus-visible:ring-brand-light",
          error ? "border-[#E72222]" : "border-ink-outline",
        )}
      />
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute left-0 top-[2px] size-6 text-white opacity-0 transition-opacity peer-checked:opacity-100"
      >
        <path d="M7 12.5l3.2 3.2L17 8.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <label
        htmlFor={id}
        className="block cursor-pointer font-[Arial,Helvetica,sans-serif] text-[15.6px] leading-[25.6px] tracking-[0.16px] text-ink-hint"
      >
        {children}
      </label>
    </div>
    {error && (
      <p role="alert" className="pl-8 pt-1 font-google-sans text-sm leading-[1.6] text-[#E72222]">
        {error}
      </p>
    )}
  </div>
);
