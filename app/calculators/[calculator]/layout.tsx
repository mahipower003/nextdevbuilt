export function generateStaticParams() {
  return [
    { calculator: 'term-insurance' },
    { calculator: 'maturity' },
    { calculator: 'pension' },
    { calculator: 'child-plan' }
  ];
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}