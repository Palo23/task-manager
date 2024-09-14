import { Avatar, AvatarFallback, AvatarImage } from './ui';

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
  avatarClassName?: string;
}

const AvatarComponent = ({ src, alt, className, avatarClassName }: AvatarImageProps) => {
  return (
    <Avatar className={avatarClassName}>
      <AvatarImage src={src} alt={alt} className={className} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Avatar>
  );
};

export { AvatarComponent };
