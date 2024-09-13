import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui';

interface BoundaryProps {
  children: ReactNode;
}

interface BoundaryState {
  hasError: boolean;
  error?: Error | null;
  errorInfo?: ErrorInfo | null;
}

class ErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  constructor(props: BoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.state = { hasError: true, error, errorInfo };
  }

  refresh() {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-display-xl text-neutral-1 text-bold text-center">An error occurred while loading this page.</p>
          <Button variant="secondary" className="mt-6">
            <span onClick={() => this.refresh()}>Refresh</span>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
