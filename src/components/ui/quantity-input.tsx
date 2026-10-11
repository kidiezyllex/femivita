"use client";

import { cn } from "@/lib/utils";
import { mdiMinus, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import * as React from "react";
import { Button } from "./button";
import { Input } from "./input";

interface QuantityInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
}

export function QuantityInput({
    value = 1,
    onChange,
    min = 1,
    max,
    step = 1,
    className,
}: QuantityInputProps) {
    const safeOnChange = (val: number) => {
        if (typeof onChange === "function") {
            onChange(val);
        }
    };

    const handleDecrement = () => {
        const newValue = value - step;
        if (newValue >= min) {
            safeOnChange(newValue);
        } else {
            safeOnChange(min);
        }
    };

    const handleIncrement = () => {
        const newValue = value + step;
        if (max !== undefined) {
            if (newValue <= max) {
                safeOnChange(newValue);
            } else {
                safeOnChange(max);
            }
        } else {
            safeOnChange(newValue);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value === "" ? 0 : parseInt(e.target.value);
        if (isNaN(val)) return;

        let finalValue = val;
        if (finalValue < min) finalValue = min;
        if (max !== undefined && finalValue > max) finalValue = max;

        safeOnChange(finalValue);
    };

    return (
        <div className={cn("flex items-center group relative", className)}>
            <div
                className="flex h-[45px] w-full overflow-hidden border-2 border-primary bg-transparent transition-all duration-300"
                style={{
                    clipPath: "polygon(0% 0%, 64% 0%, 64% 10%, 70% 10%, 75% 1%, 100% 0%, 100% 80%, 95% 100%, 42% 100%, 42% 90%, 34% 90%, 34% 100%, 5% 100%, 0% 80%)"
                }}
            >
                <Input
                    type="number"
                    value={value}
                    onChange={handleInputChange}
                    className="flex-1 h-full border-none bg-transparent text-center focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-bold text-white text-base min-w-0"
                />
                <div className="flex shrink-0">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleDecrement}
                        disabled={value <= min}
                        className="!h-[42px] w-10 bg-primary shrink-0 rounded-none hover:bg-primary/80 !text-white disabled:opacity-30"
                    >
                        <Icon path={mdiMinus} size={0.6} className="flex-shrink-0" />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleIncrement}
                        disabled={max !== undefined && value >= max}
                        className="!h-[42px] w-10 bg-primary shrink-0 rounded-none hover:bg-primary/80 !text-white disabled:opacity-30"
                    >
                        <Icon path={mdiPlus} size={0.6} className="flex-shrink-0" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
