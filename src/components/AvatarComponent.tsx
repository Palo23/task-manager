import { Avatar, AvatarFallback, AvatarImage } from './ui';

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

const AvatarComponent = ({ src, alt, className }: AvatarImageProps) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} className={className} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};

export { AvatarComponent };
