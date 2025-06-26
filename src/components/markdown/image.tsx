import { ComponentProps } from "react";
import NextImage from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

type ImageProps = Omit<ComponentProps<"img">, "src"> & {
  src?: string | StaticImport;
};

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: ImageProps) {
  if (!src) return null;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width as Width}
      height={height as Height}
      quality={40}
      {...props}
    />
  );
}
