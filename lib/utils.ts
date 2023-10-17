import { Profile } from "@prisma/client"
import { type ClassValue, clsx } from "clsx"
import moment from "moment"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date) => {
  return moment(date).fromNow()
}

export const fullName = (profile: Profile | null) => {
  if(profile === null)
  return null
  return profile?.firstName! + " " + profile?.lastName!
}