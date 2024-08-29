import { ButtonHTMLAttributes } from "react";

export type buttonProps = {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
