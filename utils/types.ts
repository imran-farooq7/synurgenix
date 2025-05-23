export type NameProps = {
  name: string;
  src: string;
  isWhiteVariant?: boolean;
  isPromotion?: boolean;
};
export type StatProps = {
  title: string;
  description: string;
};
export type CardProps = {
  title: string;
  description: string;
};
export type ServiceCardProps = {
  icon: string;
  number: number;
  title: string;
  href: string;
  description: string;
};
export type NewsCardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};
export type WhoCardProps = {
  title: string;
  description: string;
  icon: string;
  isOrange?: boolean;
};
export type WhyUsCardProps = {
  icon: string;
  title: string;
  description: string;
};
export type TeamCardProps = {
  name: string;
  image: string;
  position: string;
};
