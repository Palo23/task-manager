import { Button } from '@/components';

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-neutral-4">
      <p className="text-display-xl text-neutral-1 text-bold text-center">The page you are looking for does not exist.</p>
      <Button onClick={goBack} variant="secondary" size="lg">
        <span>Go back</span>
      </Button>
    </div>
  );
};

export { NotFound };
