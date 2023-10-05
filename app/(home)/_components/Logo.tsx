import Image from "next/image";

export const Logo = ( { height = 30, width = 30 } ) => {
  return (
    <Image
      height={height}
      width={width}
      alt="logo"
      src="/logo.svg"
    />
  )
}