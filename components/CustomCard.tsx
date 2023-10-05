import React, { Children } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
 
  interface CustomCardProps {
    cardTitle: string
    cardDescription: string
    children: React.ReactNode
  }


const CustomCard = ({cardTitle, cardDescription, children }: CustomCardProps) => {
  return (
    <Card className='border-none mb-3 bg-slate-50 rounded-md'>
    <CardHeader>
      <CardTitle className='text-lg font-bold'>{ cardTitle }</CardTitle>
      <CardDescription> { cardDescription } </CardDescription>
    </CardHeader>
    <CardContent>
     {children}
    </CardContent>
  </Card>

  )
}

export default CustomCard