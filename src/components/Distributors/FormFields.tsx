"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const LABEL_TEXT =
  "font-[Arial,Helvetica,sans-serif] text-base leading-[25.6px] tracking-[0.16px] text-gray-700 font-semibold mb-1 select-none";
const FIELD_BASE =
  "w-full rounded-lg border bg-white px-6 py-4 font-[Arial,Helvetica,sans-serif] text-base tracking-[0.16px] text-ink-dark outline-none transition-colors placeholder:text-ink-placeholder focus:border-secondary";

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
      {optionalNote && (
        <span className="text-[13.6px] leading-[22.4px] text-ink-hint">{optionalNote}</span>
      )}
    </label>
    {children}
    {error && (
      <p
        id={`${id}-error`}
        role="alert"
        className="pt-1 font-google-sans text-sm leading-[1.6] text-[#E72222]"
      >
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

interface SelectInputProps {
  id: string;
  value: string;
  placeholder: string;
  options: { value: string; label: string }[];
  hasError?: boolean;
  className?: string;
  onChange: (value: string) => void;
}

/** Custom listbox instead of a native <select>, whose popup cannot be styled. */
export const SelectInput: React.FC<SelectInputProps> = ({
  id,
  value,
  placeholder,
  options,
  hasError = false,
  className,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = options[selectedIndex];
  const listId = `${id}-listbox`;

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [isOpen]);

  const openList = () => {
    setActiveIndex(Math.max(selectedIndex, 0));
    setIsOpen(true);
  };

  const choose = (index: number) => {
    const option = options[index];
    if (option) onChange(option.value);
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        if (!isOpen) return openList();
        const step = event.key === "ArrowDown" ? 1 : -1;
        return setActiveIndex((current) => (current + step + options.length) % options.length);
      }
      case "Home":
      case "End":
        if (!isOpen) return;
        event.preventDefault();
        return setActiveIndex(event.key === "Home" ? 0 : options.length - 1);
      case "Enter":
      case " ":
        event.preventDefault();
        return isOpen ? choose(activeIndex) : openList();
      case "Escape":
        if (!isOpen) return;
        event.preventDefault();
        return setIsOpen(false);
      case "Tab":
        return setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-activedescendant={isOpen ? `${id}-option-${activeIndex}` : undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${id}-error` : undefined}
        onKeyDown={handleKeyDown}
        // Keyboard activation (detail 0) is handled in onKeyDown.
        onClick={(event) => {
          if (event.detail === 0) return;
          if (isOpen) setIsOpen(false);
          else openList();
        }}
        className={cn(
          FIELD_BASE,
          fieldBorder(hasError),
          "block cursor-pointer truncate pr-14 text-left",
          isOpen && !hasError && "border-brand",
          !selected && "text-ink-placeholder",
          className,
        )}
      >
        {selected?.label ?? placeholder}
      </button>
      <Image
        src="/logos/select-chevron.svg"
        alt=""
        width={24}
        height={24}
        draggable={false}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
      />

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            id={listId}
            role="listbox"
            data-lenis-prevent
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-30 mt-2 max-h-[280px] overflow-y-auto rounded-xl border border-ink-line bg-white p-2 shadow-[0_16px_40px_rgba(119,81,159,0.16)]"
          >
            {options.map((option, index) => {
              const isSelected = index === selectedIndex;
              return (
                <li
                  key={option.value}
                  id={`${id}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => choose(index)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between gap-4 rounded-lg px-4 py-3 font-[Arial,Helvetica,sans-serif] text-base tracking-[0.16px] transition-colors",
                    index === activeIndex ? "bg-brand-soft" : "bg-transparent",
                    isSelected ? "font-bold text-brand" : "text-ink-dark",
                  )}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <svg aria-hidden viewBox="0 0 24 24" fill="none" className="size-5 shrink-0">
                      <path
                        d="M5 12.5l4.2 4.2L19 7.2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

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
        <path
          d="M7 12.5l3.2 3.2L17 8.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
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
