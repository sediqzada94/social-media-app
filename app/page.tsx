import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PrismaClient } from '@prisma/client'


export default async function Home() {
  const prisma = new PrismaClient()
  const user = await prisma.user.findMany({
  })
  return (
    <Button variant="default" className="m-5 rounded-lg">
      { user?.[1].username}
    </Button>
  );
}
