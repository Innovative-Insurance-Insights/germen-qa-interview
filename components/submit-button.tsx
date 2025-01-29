'use client';

import { useFormStatus } from 'react-dom';
import {ReactNode} from "react";
import {Circle} from "@/components/circle";

export function SubmitButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      type={pending ? 'button' : 'submit'}
      aria-disabled={pending}
      className="flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
    >
      {children}
      {pending && <Circle/>
      }
      <span aria-live="polite" className="sr-only" role="status">
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </button>
  );
}
